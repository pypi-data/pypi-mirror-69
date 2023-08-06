# Miprem

_A **m**er**i**t **p**rofile **re**nderer for **m**ajority judgment._

This project aims to generate vector and bitmap images representing the merit profile of a
[majority judgment](https://en.wikipedia.org/wiki/Majority_judgment) election, based on the merit profile raw data.
Miprem does not process poll results, it just render as pretty as possible.

*This project is under active development - installation and usage will rapidly evolve.*

![](tests/sample.svg)

## Installation

```
curl https://framagit.org/roipoussiere/miprem/-/archive/master/miprem-master.tar.gz | tar -zx -C miprem
cd miprem
pip install --user
```

## Usage

Generate the image

```
miprem > merit_profile.svg
```

You can the view the merit profile with your favorite vector image renderer, for instance:

```
firefox merit_profile.svg
```

## Contributing

Woohoo thanks! Please read the [contribution guide](./CONTRIBUTING.md).

## Licence & authorship

This project is published under [MIT licence](./LICENCE) and developed by Nathanaël Jourdane & contributors
([maybe you?](./CONTRIBUTING.md)).
