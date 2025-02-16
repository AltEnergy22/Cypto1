require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// Check if environment variables are set
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;

if (!PRIVATE_KEY || !MUMBAI_RPC_URL) {
  console.error("Please set PRIVATE_KEY and MUMBAI_RPC_URL in your .env file");
  process.exit(1);
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    amoy: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 80002
    },
  },
};
