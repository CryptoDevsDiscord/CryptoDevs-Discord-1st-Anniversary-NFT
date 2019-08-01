pragma solidity ^0.5.0;

//import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";
import "../ERC721/ERC721Complete.sol";


contract CryptoDevs1stAnniversaryToken is ERC721Complete {

    constructor() public ERC721Complete("CryptoDevs1stAnniversaryToken", "CRYPDEV1", "QmTY8w7BfVLdyiheuTcEZ6nVCV1dZEDDfXrpRmGejzXR2k"){
        //All token parameters inserted within inherited contract constructor
    }

}
