const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "5777" // Match Ganache's network id
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
      version: "0.8.0", // Adjust as needed to match your contracts
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
