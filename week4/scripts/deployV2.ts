import { ethers, upgrades } from 'hardhat';

const proxyAddress = '0x60Cb5AaDEe8A6D0a1F481E0C63dc85A344fdbdEd';

async function main() {
    console.log(proxyAddress, "original proxyAddress");
    const elviseProxyV2 = await ethers.getContractFactory("elviseProxyV2");
    console.log("upgrade to elviseProxyV2");
    const deployer = await upgrades.upgradeProxy(proxyAddress, elviseProxyV2);
    console.log(deployer.address, " elviseProxyV2 address")
    console.log(await upgrades.erc1967.getImplementationAddress(deployer.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(deployer.address), " getAdminAddress")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })