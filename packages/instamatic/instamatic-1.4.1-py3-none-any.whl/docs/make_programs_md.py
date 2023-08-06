import subprocess as sp
from pathlib import Path


def parse_lines(lines):
    ret = []

    buffer = []
    val = ''

    for line in lines:
        line = line.strip()

        if not line:
            break

        inp = line.split('  ', maxsplit=1)

        if len(inp) == 2:
            key = inp[0]
            val = inp[1].strip()
            buffer.append((key, val))
            val = ''

        elif inp[0].startswith('-'):
            if val:
                buffer.append((key, val))
                val = ''
            key = inp[0]
        else:
            val += ' ' + inp[0]

    for key, val in buffer:
        ret.append(f'`{key}`:  \n{val}  ')

    return ret


out = open('autodoc.md', 'w')

fn = Path().absolute().parent / 'setup.py'

print(fn)

category = '- **{}**'
toc = '  + [{}](#{}) (`{}`)'
header = '\n## {}\n'

capture = False
lines = []

with open(fn, 'r') as f:
    for line in f:
        if 'console_scripts' in line:
            capture = True
            continue
        if '],' in line:
            capture = False
            continue

        if capture:
            lines.append(line.strip())


progs = []

for line in lines:
    if not line:
        continue

    if line.startswith('#'):
        title = line.strip("#' ").capitalize()
        print(category.format(title), file=out)

    else:
        prog, loc = line.split('=')

        prog = prog.strip("' ")
        ref = prog.strip('.')
        loc = loc.strip("' ,")
        print(toc.format(prog, ref, loc), file=out)

        progs.append(prog)


for i, prog in enumerate(progs):
    positional = []
    optional = []
    description = []
    usage = []

    print(i, prog)
    print(header.format(prog), file=out)
    call = prog + '.exe' + ' -h'
    p = sp.run(call, capture_output=True)

    lines = iter(p.stdout.decode().splitlines())

    for line in lines:
        if line.startswith('Config directory:'):
            continue

        if line.startswith('usage:'):
            usage.append('**Usage:**  ')
            usage.append('```bash')
            usage.append(line[7:])
            for line in lines:
                if not line:
                    break
                usage.append(line[7:])
            usage.append('```')

        elif line.startswith('optional arguments:'):
            optional.append('**Optional arguments:**  ')

            new = parse_lines(lines)
            optional.extend(new)

        elif line.startswith('positional arguments:'):
            positional.append('**Positional arguments:**  ')

            new = parse_lines(lines)
            positional.extend(new)

        else:
            description.append(line)

    for line in description:
        print(line, file=out)

    for line in usage:
        print(line, file=out)

    for line in positional:
        print(line, file=out)

    if positional and optional:
        print('', file=out)

    for line in optional:
        print(line, file=out)

    print('', file=out)
