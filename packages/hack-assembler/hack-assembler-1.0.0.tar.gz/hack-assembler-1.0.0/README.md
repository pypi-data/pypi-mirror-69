# Python implementation of Hack assembler

![tests](https://github.com/ITD27M01/hack-assembler/workflows/tests/badge.svg)

[nand2tetris project6](https://www.nand2tetris.org/project06)

    hasm Prog.asm

With `--debug` option you can see full assemble proccess:

```text
> hasm /Users/igor.tiunov/Documents/nand2tetris/projects/06/Add.asm --debug
DEBUG:assembler.parser:Start to process /Users/igor.tiunov/Documents/nand2tetris/projects/06/Add.asm
DEBUG:assembler.parser:@2 is A instruction
DEBUG:assembler.parser:D=A is C instruction
DEBUG:assembler.parser:@3 is A instruction
DEBUG:assembler.parser:D=D+A is C instruction
DEBUG:assembler.parser:@0 is A instruction
DEBUG:assembler.parser:M=D is C instruction
DEBUG:assembler.cli:parsed code: [{'type': 'A_INSTRUCTION', 'obj': <re.Match object; span=(0, 2), match='@2'>}, {'type': 'C_INSTRUCTION', 'obj': <re.Match object; span=(0, 3), match='D=A'>}, {'type': 'A_INSTRUCTION', 'obj': <re.Match object; span=(0, 2), match='@3'>}, {'type': 'C_INSTRUCTION', 'obj': <re.Match object; span=(0, 5), match='D=D+A'>}, {'type': 'A_INSTRUCTION', 'obj': <re.Match object; span=(0, 2), match='@0'>}, {'type': 'C_INSTRUCTION', 'obj': <re.Match object; span=(0, 3), match='M=D'>}]
DEBUG:assembler.symbols:Labels in code: []
DEBUG:assembler.symbols:Labels symbols table: {'SP': 0, 'LCL': 1, 'ARG': 2, 'THIS': 3, 'THAT': 4, 'R0': 0, 'R1': 1, 'R2': 2, 'R3': 3, 'R4': 4, 'R5': 5, 'R6': 6, 'R7': 7, 'R8': 8, 'R9': 9, 'R10': 10, 'R11': 11, 'R12': 12, 'R13': 13, 'R14': 14, 'R15': 15, 'SCREEN': 16384, 'KBD': 24576}
DEBUG:assembler.symbols:Variables symbols table: {}
DEBUG:assembler.code:Produce @2 code
DEBUG:assembler.code:Produce ('D=', 'A', None) code
DEBUG:assembler.code:Produce @3 code
DEBUG:assembler.code:Produce ('D=', 'D+A', None) code
DEBUG:assembler.code:Produce @0 code
DEBUG:assembler.code:Produce ('M=', 'D', None) code
DEBUG:assembler.code:Write code to /Users/igor.tiunov/Documents/nand2tetris/projects/06/Add.hack
DEBUG:assembler.cli:assembled code: ['0000000000000010', '1110110000010000', '0000000000000011', '1110000010010000', '0000000000000000', '1110001100001000']
```