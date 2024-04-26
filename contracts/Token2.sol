// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token2 is ERC20 {

    constructor() ERC20("SaitaRealty", "SRLTY") {
        _mint(msg.sender, 1e9 * 10**18);
    }

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }

    // function _transfer(address from, address to, uint256 amount) internal override {
    //     super._transfer(from, address(this), (amount * 10) / 100);
    //     super._transfer(from, to, amount - ((amount * 10) / 100));
    // }
}