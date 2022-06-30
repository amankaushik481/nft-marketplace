require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".env").toString();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/dcf1df6dad9a4b018d69740bbfe12b63",
      accounts: [privateKey],
    },
    mainnet: {
      url: "https://polygon-mainnet.infura.io/v3/dcf1df6dad9a4b018d69740bbfe12b63",
      accounts: [privateKey],
    },
  },
  solidity: "0.8.4",
};
