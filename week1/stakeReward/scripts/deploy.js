

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    console.log("Deploy Account Balance:", (await deployer.getBalance()).toString());

    //deploy token contract
    const stake = await ethers.getContractFactory("StakingRewards");
    const Stake = await stake.deploy("0x850CC9eBD982FafD1DeD3B3b439B5B5dB530e666", "0xd66c6B4F0be8CE5b39D52E0Fd1344c389929B378");
    console.log("stakingRewards address:", Stake.address);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });