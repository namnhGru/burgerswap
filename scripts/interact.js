const { ethers } = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
    const Contract = await ethers.getContractFactory("Greeter")
    const contract = await Contract.attach("0x73511669fd4dE447feD18BB79bAFeAC93aB7F31f")
    const a = await contract.setGreeting("hello rinkeby")
    console.log(await contract.greet())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
