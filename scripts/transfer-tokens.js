const hre = require("hardhat");

async function main() {
  const [sender] = await hre.ethers.getSigners();
  
  // The address you want to send tokens to
  const receiverAddress = "0xCa9481a834AcfC84c6811D9a5aBa8E39af3ED9c1";
  
  // Amount to send in MATIC (0.03 MATIC)
  const amountToSend = hre.ethers.parseEther("0.03");
  
  console.log("Sending from:", await sender.getAddress());
  console.log("Sending to:", receiverAddress);
  console.log("Amount:", hre.ethers.formatEther(amountToSend), "MATIC");
  
  // Create and send the transaction
  const tx = await sender.sendTransaction({
    to: receiverAddress,
    value: amountToSend
  });
  
  console.log("Transaction hash:", tx.hash);
  await tx.wait();
  console.log("Transfer complete!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 