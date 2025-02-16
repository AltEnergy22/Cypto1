const hre = require("hardhat");

async function main() {
  const EnergyRevenueToken = await hre.ethers.getContractFactory("EnergyRevenueToken");
  const token = await EnergyRevenueToken.deploy();
  
  await token.waitForDeployment();
  
  console.log(`Deployed at: ${await token.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 