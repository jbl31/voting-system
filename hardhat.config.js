require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");
require('solidity-coverage');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  // defaultNetwork:"hardhat",
  //   localhost:{
  //     url:"http://127.0.0.1:8545/",
  //     chainId:31337
  //   },
  settings: {          // See the solidity docs for advice about optimization and evmVersion
    optimizer: {
      enabled: false,
      runs: 200
    }
  },
  gasReporter:{
    enabled:true,
    currency:'USD'
 },
};
