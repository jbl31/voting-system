# Project description
 
>This project is a Blockchain voting project and unit testing for Alyra's school project n°2.
>It use HardHat framework, Mocha and OpenZeppelin Helpers for testing purpose.

## How to install an run

In a shell, clone the project:
```bash
git clone https://github.com/jbl31/voting-system.git
```
```bash
cd voting-system
```

To install the dependencies, run:
```bash
npm install
```

In another terminal, run to launch the hardhat blockchain:
```bash
npx hardhat node
```

If you need to deploy the contract locally:
```bash
npx hardhat --network localhost run scripts/deploy-voting.js
```

## Testing:
To run the unit tests, run:
```bash
npx hardhat test
```

### Coverage
To check the test coverage, run:
```bash
npx hardhat coverage
```

## Badges
Add badges from somewhere like: [shields.io](https://shields.io/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)