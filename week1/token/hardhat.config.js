require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const proxyUrl = 'http://127.0.0.1:7890';   
const { ProxyAgent, setGlobalDispatcher } = require("undici");
const proxyAgent = new ProxyAgent(proxyUrl);
setGlobalDispatcher(proxyAgent);
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [{
      version: "0.8.18",
      settings: {
      optimizer: {
        enabled: true,
        runs: 1
      }
    }
    }
    ]
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true
    },
    bnbtest:{
      url: `https://bsc-testnet.public.blastapi.io`,
      allowUnlimitedContractSize: true,
      gas:3000000,
      gasPrice: 20000000000,
      accounts: ['']
    }
  },
  etherscan: {
    apiKey: {
      bscTestnet: ""
    }
  }
};