import { expect } from "chai";
import { ethers, upgrades } from "hardhat";
import { Contract, BigNumber } from "ethers";

describe("test elviseProxyV2", function () {
  let elviseProxy:Contract;
  let elviseProxyV2:Contract;
  beforeEach(async function () {
    const ElviseProxy = await ethers.getContractFactory("elviseProxy");
    const ElviseProxyV2 = await ethers.getContractFactory("elviseProxyV2");
    elviseProxy = await upgrades.deployProxy(ElviseProxy, [7], 
      {initializer: 'initialize'});
    
    elviseProxyV2 = await upgrades.upgradeProxy(elviseProxy.address, ElviseProxyV2);
  })

  it("should return value after it's changed", async function () {
    await elviseProxyV2.decreaseValue();
    expect(await elviseProxyV2.value()).to.equal(BigNumber.from('6'));
  })
})