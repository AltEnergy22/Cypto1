// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EnergyRevenueToken is ERC20 {
    constructor() ERC20("Energy Revenue Token", "ERT") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
} 