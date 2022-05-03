import { ethers } from "hardhat";

async function main() {
  const MAX_NUM_OF_WHITELISTED_ADDRESSES = 10;
  /*
 A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
 so whitelistContract here is a factory for instances of our Whitelist contract.
 */
  const whitelistContract = await ethers.getContractFactory("Whitelist");

  // here we deploy the contract
  const deployedWhitelistContract = await whitelistContract.deploy(MAX_NUM_OF_WHITELISTED_ADDRESSES);

  // Wait for it to finish deploying
  await deployedWhitelistContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Whitelist Contract Address:",
    deployedWhitelistContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
