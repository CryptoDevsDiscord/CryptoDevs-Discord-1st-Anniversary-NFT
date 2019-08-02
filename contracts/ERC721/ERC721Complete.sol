pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Enumerable.sol";
import "./ERC721MintableSingular.sol";
import "./ERC721MetadataSingular.sol";

/**
 * @title Complete ERC721 Token
 * @dev Combines the ERC721 Enumerable, MetadataSingular, and MintableSingular contracts together
 *
 */
contract ERC721Complete is ERC721, ERC721Enumerable, ERC721MetadataSingular, ERC721MintableSingular {

    constructor(string memory name, string memory symbol, string memory tokenURI) public ERC721MetadataSingular(name, symbol, tokenURI) {
       //Simply passing constructor params along 
    }

}
