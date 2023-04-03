// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract elviseProxy is Initializable{
    uint public value;

    function initialize(uint _value) public initializer{
        value = _value;
    }

    function increaseValue() external {
        ++value;
    }
}