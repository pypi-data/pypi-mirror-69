from __future__ import annotations

import shutil
import textwrap
from typing import Any, Iterator, List, Optional, Tuple, Type

from more_itertools import unique_everseen

from oactool.schema import ArgumentPattern, BasePattern, Cli, CommandPattern, GroupPattern, OptionPattern, Specification


def format_token(items: List[str], exclusive: bool, optional: bool, repeated: bool, root: bool = False) -> str:
    sep = "|" if exclusive else " "
    joined = sep.join(items)

    if optional:
        joined = f"[{joined}]"
    elif len(items) > 1 and not root:
        joined = f"({joined})"

    if repeated:
        joined = f"{joined}..."

    return joined


def format_argument(argument_p: ArgumentPattern) -> str:
    return format_token(
        [f"<{argument_p.argument.name or 'arg'}>"],
        exclusive=False,
        optional=argument_p.optional,
        repeated=argument_p.repeated,
    )


def format_option_single(name: str, arg: Optional[ArgumentPattern], arg_separator: str, prefix: str) -> str:
    farg = format_argument(arg) if arg else None

    if farg:
        return f"{prefix}{name}{arg_separator}{farg}"
    return f"{prefix}{name}"


def format_option(option_p: OptionPattern, usage=False) -> str:
    names = [
        format_option_single(name, option_p.argument, option_p.separators_short[0], option_p.prefix_short)
        for name in option_p.option.names_short
    ] + [
        format_option_single(name, option_p.argument, option_p.separators_long[0], option_p.prefix_long)
        for name in option_p.option.names_long
    ]

    if usage:
        return ", ".join(names)

    return format_token(names, exclusive=True, optional=option_p.optional, repeated=option_p.repeated)


def format_group(group: GroupPattern, root=False) -> str:
    return format_token(
        [format_pattern(s) for s in group.patterns],
        exclusive=group.exclusive,
        repeated=group.repeated,
        optional=group.optional,
        root=root,
    )


def format_command(p: CommandPattern) -> str:
    return format_token([p.command.names[0]], exclusive=False, repeated=p.repeated, optional=p.optional)


def format_pattern(p: BasePattern) -> str:
    if isinstance(p, CommandPattern):
        return format_command(p)
    elif isinstance(p, ArgumentPattern):
        return format_argument(p)
    elif isinstance(p, OptionPattern):
        return format_option(p)
    elif isinstance(p, GroupPattern):
        return format_group(p)
    return ""


def get_unique_recursively(pattern_type: Type[Any], cli: Cli):
    def walk_groups(group_list: List[GroupPattern]):
        for group_pattern in group_list:
            for pattern in group_pattern.patterns:
                if isinstance(pattern, GroupPattern):
                    for nested_item in walk_groups([pattern]):
                        yield nested_item
                elif isinstance(pattern, pattern_type):
                    yield pattern

    for option in unique_everseen(walk_groups(cli.pattern_groups)):
        yield option


def make_options(cli: Cli) -> Iterator[Tuple[str, str]]:
    for option_p in get_unique_recursively(OptionPattern, cli):
        yield format_option(option_p, usage=True), option_p.option.description or ""


def make_usage_block(cli: Cli) -> str:
    usage_lines = ["Usage:"]
    for pattern_group in cli.pattern_groups:
        usage_lines += [f"  {cli.name} {format_group(pattern_group, root=True)}"]
    return "\n".join(usage_lines)


def make_options_block(cli: Cli) -> str:
    options_lines = ["Options:"]

    spec_options = list(make_options(cli))

    termsize = shutil.get_terminal_size((80, 20))

    max_options_size = len(max(spec_options, key=lambda x: len(x[0]))[0]) if spec_options else 20
    option_column = min(max_options_size, termsize.columns)

    wrapper = textwrap.TextWrapper(width=termsize.columns - option_column - 4, replace_whitespace=False)

    for option, helptext in spec_options:
        for i, helptext_line in enumerate(wrapper.fill(helptext).splitlines()):
            if i > 0:
                line = " " * (option_column + 4)
            else:
                line = "  {option:<{termsize}}  ".format(option=option, termsize=option_column)
            options_lines += [line + helptext_line]
    return "\n".join(options_lines)


def render_docopt(spec: Specification) -> str:
    return "\n".join([make_usage_block(spec.cli), "", make_options_block(spec.cli)])
