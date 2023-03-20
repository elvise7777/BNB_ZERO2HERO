

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    console.log("Deploy Account Balance:", (await deployer.getBalance()).toString());

    //deploy token contract
    const ElviseToken = await ethers.getContractFactory("eToken");
    const elviseToken = await ElviseToken.deploy();
    console.log("eToken address:", elviseToken.address);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });