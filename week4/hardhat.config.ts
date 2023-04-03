import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-etherscan";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    localhost: {
      url: "http://localhost:8545",
    },
    bnbtest: {
      url: "https://bsc-testnet.public.blastapi.io",
      accounts: process.env.pk !== undefined ? [process.env.pk] : []
    },
  },
  etherscan: {
    apiKey: {
      bscTestnet: process.env.bak !== undefined ? process.env.bak : ""
    }
  }
};

export default config;
