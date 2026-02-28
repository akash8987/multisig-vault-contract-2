const hre = require("hardhat");

async function main() {
  const [deployer, owner2, owner3] = await hre.ethers.getSigners();

  console.log("Deploying MultiSigWallet with account:", deployer.address);

  const owners = [deployer.address, owner2.address, owner3.address];
  const requiredConfirmations = 2;

  const MultiSig = await hre.ethers.getContractFactory("MultiSigWallet");
  const wallet = await MultiSig.deploy(owners, requiredConfirmations);

  await wallet.waitForDeployment();

  console.log("MultiSigWallet deployed to:", await wallet.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
