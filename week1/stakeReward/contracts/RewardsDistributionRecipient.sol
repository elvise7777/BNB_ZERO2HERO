// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

abstract contract RewardsDistributionRecipient is Ownable {
    address private rewardsDistribution;

    constructor() {
        _setRewardsDistribution(_msgSender());
    }

    function notifyRewardAmount(uint256 reward) external virtual;

    modifier onlyRewardsDistribution() {
        require(msg.sender == rewardsDistribution, "Caller is not RewardsDistribution contract");
        _;
    }

    function setRewardsDistribution(address _rewardsDistribution) public onlyOwner {
         _setRewardsDistribution(_rewardsDistribution);
    }

    function _setRewardsDistribution(address _rewardsDistribution) internal {
        rewardsDistribution = _rewardsDistribution;
    }
}
