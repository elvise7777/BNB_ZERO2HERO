import { ethers, upgrades } from "hardhat";

async function main() {
  const elviseProxy = await ethers.getContractFactory('elviseProxy');
  const deployer = await upgrades.deployProxy(elviseProxy, [100], 
    {initializer: 'initialize'});
  
  await deployer.deployed();
  
  const proxyAddress = deployer.address;
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    deployer.address
  );
  const adminAddress = await upgrades.erc1967.getAdminAddress(deployer.address);

  console.log(`proxyAddress: ${proxyAddress}`);
  console.log(`implementationAddress: ${implementationAddress}`);
  console.log(`adminAddress: ${adminAddress}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
