const hre = require("hardhat");

async function main() {
  //STAKING CONTRACT
  const Contact = await hre.ethers.deployContract("Contact");

  await Contact.waitForDeployment();

  //TOKEN CONTRACT
  console.log(` Contact Contract Address: ${Contact.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
