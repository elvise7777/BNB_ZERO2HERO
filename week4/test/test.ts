import { expect } from "chai";
import { ethers, upgrades } from "hardhat";
import { Contract, BigNumber } from "ethers";

describe("test elviseProxy", function () {
  let elviseProxy:Contract;
  beforeEach(async function () {
    const ElviseProxy = await ethers.getContractFactory("elviseProxy");
    elviseProxy = await upgrades.deployProxy(ElviseProxy, [7], 
      {initializer: 'initialize'});
    await elviseProxy.deployed();
  })

  it("should return value after it's changed", async function () {
    await elviseProxy.increaseValue();
    expect(await elviseProxy.value()).to.equal(BigNumber.from('8'));
  })
})