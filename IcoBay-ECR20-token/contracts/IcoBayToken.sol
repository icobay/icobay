pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract IcoBayToken is MintableToken {
	string constant public name = "IcoBay";
	string constant public symbol = "IBT";
	uint8 constant public decimals = 18;
	uint256 constant public totalSupplyCap = 1 * (10**9) * (10**18);
	
	function mint(address _to, uint256 _amount) onlyOwner canMint public returns (bool) {
  	  require(totalSupply_.add(_amount) <= totalSupplyCap);
      return super.mint(_to, _amount);
    }
}