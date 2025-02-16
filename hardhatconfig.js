require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: "0.8.20",
};
