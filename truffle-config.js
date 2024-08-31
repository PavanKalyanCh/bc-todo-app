const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",  // Corrected: separate host
      port: 7545,         // Corrected: use the correct port for Ganache
      network_id: "*"     // Match any network id
    },
    ropsten: {
      provider: () => new HDWalletProvider(
        process.env.DEPLOYER_PRIVATE_KEY,
        process.env.ALCHEMY_API_URL
      ),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Gas limit
      confirmations: 2,    // Number of confirmations to wait between deployments
      timeoutBlocks: 200,  // Number of blocks before a deployment times out
      skipDryRun: true     // Skip dry run before migrations
    }
  },
  compilers: {
    solc: {
      version: "0.8.0",   // Use a specific stable version of Solidity
      settings: {
        optimizer: {
          enabled: true,  // Enable optimization
          runs: 200       // Optimize for how many times you intend to run the code
        }
      }
    }
  }
};
