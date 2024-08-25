const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: () => new HDWalletProvider(
        process.env.DEPLOYER_PRIVATE_KEY,
        process.env.ALCHEMY_API_URL
      ),
      network_id: 3, // Ropsten's id
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "0.8.0", // Specify the compiler version that matches your contracts
      settings: {       // Enable the optimizer
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};
