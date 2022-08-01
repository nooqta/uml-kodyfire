<h1 align="center">Welcome to uml-kodyfire 👋</h1>
 <a href="https://www.npmjs.com/package/uml-kodyfire" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/uml-kodyfire.svg">
  </a>
  <a href="https://github.com/nooqta/kodyfire/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://twitter.com/anis_marrouchi" target="_blank">
    <img alt="Twitter: anis_marrouchi" src="https://img.shields.io/twitter/follow/anis_marrouchi.svg?style=social" />
  </a>

A uml diagram generator using kodyfire.

## Prerequisites
- [kodyfire-cli](https://github.com/nooqta/kodyfire)

Make sure you have kodyfire-cli intalled globally.

```sh
npm i -g kodyfire-cli
```

## Install

Add uml-kodyfire as an npm dependency to your project

```sh
npm i -s uml-kodyfire
```

## Usage

### Method 1: As a generator
In order to generate your artifacts. The syntax is `kody generate|g [kody] [concept]`. If you ommit `kody` and `concept` the assistant will prompt you to select them. As an example, run the following command from your terminal:
```sh
kody generate react component
```
### Method 2: As a kody project
Refer to the kodyfire ["install a kody"](https://github.com/nooqta/kodyfire#install-a-kody) section
```sh
npm i -s uml-kodyfire
```
Once you are ready to run your definition file, generate your uml's using:
```sh
kody run -s uml-kody.json
```
## Features
- Class diagrams (basic)
- Use Case diagrams (basic)
- Sequence diagrams (In progress)
- Acitivity diagram (In progress)

## License
Copyright © 2022 [Anis Marrouchi](https://github.com/anis-marrouchi).<br />


This project is [MIT](https://github.com/nooqta/uml-kodyfire/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-kodyfire](https://github.com/nooqta/readme-kodfire)_