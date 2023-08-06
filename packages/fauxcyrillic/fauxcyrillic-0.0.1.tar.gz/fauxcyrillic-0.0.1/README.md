# fauxcyrillic - convert Latin text to faux Cyrillic

fauxcyrillic is a Python library and command-line utility to convert Latin text to faux Cyrillic. From [Wikipedia](https://en.wikipedia.org/wiki/Faux_Cyrillic):
> Faux Cyrillic, pseudo-Cyrillic, pseudo-Russian or faux Russian typography is the use of Cyrillic letters in Latin text, usually to evoke the Soviet Union or Russia, though it may be used in other contexts as well.

## Installation

[pip](https://pip.pypa.io/en/stable/) can be used to install fauxcyrillic:

```bash
pip install fauxcyrillic
```

To make fauxcyrillic available outside your Python environment, I recommend to install fauxcyrillic using [pipx](https://github.com/pipxproject/pipx):

```bash
pipx install fauxcyrillic
```

## Usage

fauxcyrillic can be used as a command-line utility as follows:

```bash
fauxcyrillic '<text>'
```

Not that `<text>` should be in quotes in case you use spaces in your text. If no argument is provided, you will be prompted to provide your text.

## Contributing
Please refer to [CONTRIBUTING.md](https://gitlab.com/dkreeft/fauxcyrillic/-/blob/master/CONTRIBUTING.md)

## License
[BSD-3](https://gitlab.com/dkreeft/fauxcyrillic/-/blob/master/LICENSE)

