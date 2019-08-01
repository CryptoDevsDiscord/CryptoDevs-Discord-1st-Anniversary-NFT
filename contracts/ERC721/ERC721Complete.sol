pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Enumerable.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Mintable.sol";
import "./ERC721MetadataSinglular.sol";

/**
 * @title Complete ERC721 Token
 * @dev Combines the 
 *
 */
contract ERC721Complete is ERC721, ERC721Enumerable, ERC721MetadataSingular, ERC721Mintable {

    constructor(string memory name, string memory symbol, string memory tokenURI) public ERC721MetadataSingular(name, symbol, tokenURI) {

    }

}
