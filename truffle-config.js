module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "5777" // Match Ganache's network id
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Specify the Solidity compiler version
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
