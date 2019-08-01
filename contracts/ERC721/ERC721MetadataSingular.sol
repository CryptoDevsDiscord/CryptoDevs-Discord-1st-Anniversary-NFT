pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";
import "openzeppelin-solidity/contracts/token/ERC721/IERC721Metadata.sol";
import "openzeppelin-solidity/contracts/introspection/ERC165.sol";

contract ERC721MetadataSingular is ERC165, ERC721, IERC721Metadata {
    // Token name
    string private _name;

    // Token symbol
    string private _symbol;

    // Token URI (i.e. IPFS)
    string private _tokenURI;

    /*
     *     bytes4(keccak256('name()')) == 0x06fdde03
     *     bytes4(keccak256('symbol()')) == 0x95d89b41
     *     bytes4(keccak256('tokenURI()')) == 0x3c130d90
     *
     *     => 0x06fdde03 ^ 0x95d89b41 ^ 0x3c130d90 == 0xaf3648d2
     */
    bytes4 private constant _INTERFACE_ID_ERC721_METADATA = 0xaf3648d2;

    /**
     * @dev Constructor function
     */
    constructor (string memory name, string memory symbol, string memory tokenURI) public {
        _name = name;
        _symbol = symbol;
        _tokenURI = tokenURI;

        // register the supported interfaces to conform to ERC721 via ERC165
        _registerInterface(_INTERFACE_ID_ERC721_METADATA);
    }

    /**
     * @dev Gets the token name.
     * @return string representing the token name
     */
    function name() external view returns (string memory) {
        return _name;
    }

    /**
     * @dev Gets the token symbol.
     * @return string representing the token symbol
     */
    function symbol() external view returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Gets the tokenURI.
     * @return string representing the token URI
     */
    function tokenURI() external view returns (string memory) {
        return _tokenURI;
    }

    /**
     * @dev Internal function to set the token URI for a given token.
     * @param uri string URI to assign
     */
    function _setTokenURI(string memory uri) internal {
        _tokenURI = uri;
    }

}

