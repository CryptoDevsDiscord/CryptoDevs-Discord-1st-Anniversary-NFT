pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";
import "openzeppelin-solidity/contracts/access/roles/MinterRole.sol";
import "openzeppelin-solidity/contracts/drafts/Counters.sol";

/**
 * @title ERC721Mintable
 * @dev ERC721 minting logic.
 */
contract ERC721MintableSingular is ERC721, MinterRole {
    using Counters for Counters.Counter;

    Counters.Counter public nextTokenID;

    /**
     * @dev Function to mint tokens.
     * @param to The address that will receive the minted token.
     * @return A boolean that indicates if the operation was successful.
     */
    function mint(address to) public onlyMinter returns (bool) {
        uint256 tokenID = nextTokenID.current();
        nextTokenID.increment();
        _mint(to, tokenID);
        return true;
    }
}
