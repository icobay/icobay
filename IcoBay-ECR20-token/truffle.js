var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = 'REPLACE_WITH_MNEMONIC';
var infura_apikey = "REPLACE_WITH_INFURA_APIKEY";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/'+infura_apikey),
      network_id: 3,
      gas: 2000000
    },
    kovan: {
      provider: new HDWalletProvider(mnemonic, "https://kovan.infura.io/"+infura_apikey),
      network_id: 42,
      gas:  2000000
    },
    mainnet: {
      provider: new HDWalletProvider(mnemonic, "https://mainnet.infura.io/"+infura_apikey),
      network_id: 1,
      gas:  2000000
    }
  }
};
