pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Mintable.sol";

contract ERC721Complete is ERC721, ERC721Full, ERC721Mintable {

    constructor(string memory name, string memory symbol) public ERC721Full(name, symbol) {

    }

}

