const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const AppointmentManager = await hre.ethers.getContractFactory("AppointmentManager");

  // Deploy the contract
  const contract = await AppointmentManager.deploy();

  // Wait for it to be mined
  await contract.waitForDeployment(); // ✅ Correct method with latest Hardhat

  // Print the deployed address
  console.log("Contract deployed to:0x5FbDB2315678afecb367f032d93F642f64180aa3", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
