const hre = require("hardhat");

async function main() {
  const [signer] = await hre.ethers.getSigners();
  const address = await signer.getAddress();
  console.log("Network:", hre.network.name);
  console.log("Your wallet address:", address);
  
  const balance = await hre.ethers.provider.getBalance(address);
  console.log("Balance:", hre.ethers.formatEther(balance), "MATIC");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 