// pragma solidity 0.8.12;
// SPDX-License-Identifier: MIT

 
contract Solotto {
    uint32 public bronzeTicketTokenId; // goes from [223, 333] inclusive
    uint32 public silverTicketTokenId; // goes from [112, 222] inclusive
    uint32 public goldTicketTokenId; // goes from [1,111] inclusive

    // initialize owner, ticket numbers, and ipfs base uri of NFT folder
    constructor(string memory _ipfsBaseURI)  {
        baseURI=_ipfsBaseURI;
        owner=payable(msg.sender);
        bronzeTicketTokenId=1;
        silverTicketTokenId=112;
        bronzeTicketTokenId=223;
    }

    // Owner of contract
    address payable owner;

    // Token name
    string private tokenName = "Solotto";

    // Token symbol
    string private tokenSymbol = "SLTO";
    
    // Base IPFS uri
    string private baseURI;

    // tokenId => userWhoOwnsIt
    mapping(uint32 => address) private _owners;

    // tokenId => ipfsBaseURI
    mapping(uint32=>string) public tokenURIs;
 
    // –––––––––––––––––––––––FUNCTIONS–––––––––––––––––––––––––
     function name() public view returns (string memory) { // gets name of token: Solotto
        return tokenName;
    }

    function symbol() public view returns (string memory) { // gets symbol of token: SLTO
        return tokenSymbol; 
    }

    function ownerOf(uint32 tokenId) public view returns (address) { // find owner of this NFT
        require(_owners[tokenId] != address(0), "Token hasn't been minted yet"); // ensure that this token has been minted
        return _owners[tokenId]; // grab owner from owners array
    }


    // –––––––––––––––––––––––TICKET MINTING FUNCTIONS–––––––––––––––––––––––––
    function mintBronzeTicket(address minter) public payable { // mints an NFT
        require(minter != address(0), "Cannot mint to zero address"); // ensure that the minter isn't a 0 address
        require(bronzeTicketTokenId<334, "Sorry, there are no more Bronze tickets"); // ensure that we're under NFT #334
        require(msg.value>=10**17,"Not enough to mint a Bronze ticket"); // ensure that minter is sending equal or more than 0.1 SOL

        _owners[bronzeTicketTokenId] = minter; // this token now belongs to the minter
        tokenURIs[bronzeTicketTokenId]=string(abi.encodePacked(baseURI,"/",toString(bronzeTicketTokenId))); // this token now points to it's relative IPFS path
        bronzeTicketTokenId++; // increment counter
    }

    function mintSilverTicket(address minter) public payable { // mints an NFT
        require(minter != address(0), "Cannot mint to zero address"); // ensure that the minter isn't a 0 address
        require(silverTicketTokenId<223, "Sorry, there are no more Silver tickets"); // ensure that we're under NFT #223
        require(msg.value>=20**17,"Not enough to mint a Silver ticket"); // ensure that minter is sending equal or more than 0.2 SOL 

        _owners[silverTicketTokenId] = minter; // this token now belongs to the minter
        tokenURIs[silverTicketTokenId]=string(abi.encodePacked(baseURI,"/",toString(silverTicketTokenId))); // this token now points to it's relative IPFS path
        silverTicketTokenId++;
    }

    function mintGoldTicket(address minter) public payable { // mints an NFT
        require(minter != address(0), "Cannot mint to zero address"); // ensure that the minter isn't a 0 address
        require(goldTicketTokenId<112, "Sorry, there are no more Gold tickets"); // ensure that we're under NFT #112
        require(msg.value>=30**17,"Not enough to mint a Gold ticket"); // ensure that minter is sending equal or more than 0.3 SOL
        
        _owners[goldTicketTokenId] = minter; // this token now belongs to the minter
        tokenURIs[goldTicketTokenId]=string(abi.encodePacked(baseURI,"/",toString(goldTicketTokenId))); // this token now points to it's relative IPFS path
        goldTicketTokenId++;
    }


    // –––––––––––––––––––––––PRIZE DISTRIBUTION FUNCTIONS–––––––––––––––––––––––––
    function distributeJackpotBronze(uint64 _amount)public { 
        require(msg.sender==owner,"Only the Dev can distribute the jackpots"); // only the dev can call this function
        uint32 luckyWinner=uint32(block.timestamp) % 111 + 1 + 222; // generate random number between [223,333]
        require(payable(_owners[luckyWinner]) != address(0)); // ensure that the selected winner isn't a zero address
        payable(_owners[luckyWinner]).transfer(_amount); // send the lucky winners their prize
    }

    function distributeJackpotSilver(uint64 _amount)public { 
        require(msg.sender==owner,"Only the Dev can distribute the jackpots"); // only the dev can call this function
        uint32 luckyWinner=uint32(block.timestamp) % 111 + 1 + 111; // generate random number between [112,222]
        require(payable(_owners[luckyWinner]) != address(0)); // ensure that the selected winner isn't a zero address
        payable(_owners[luckyWinner]).transfer(_amount); // send the lucky winners their prize
    }

    function distributeJackpotGold(uint64 _amount)public { 
        require(msg.sender==owner,"Only the Dev can distribute the jackpots"); // only the dev can call this function
        uint32 luckyWinner=uint32(block.timestamp) % 111 + 1; // generate random number between [1,111]
        require(payable(_owners[luckyWinner]) != address(0)); // ensure that the selected winner isn't a zero address
        payable(_owners[luckyWinner]).transfer(_amount); // send the lucky winners their prize
    }


    // –––––––––––––––––––––––ONLY OWNER FUNCTIONS–––––––––––––––––––––––––
    function burn(uint32 tokenId)public {
        require(msg.sender==owner,"You cannot burn this NFT"); // only the developer can burn
        _owners[tokenId]=address(0); // point to 0 address
    }

    function withdrawToOwner(uint64 _amount) public {
        require(msg.sender==owner); // only the dev can call this function
        owner.transfer(_amount); // transfer the owner's wallet amount specified
        // (bool success, ) = owner.call{value: _amount}("");
        // require(success, "Failed to send SOL");
    }


    function toString(uint32 value) public pure returns (string memory) { // this function turns a number into a string so 1 => "1"
        if (value == 0) {
            return "0";
        }
        uint32 temp = value;
        uint32 digits=0;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint32(value % 10)));
            value /= 10;
        }
        return string(buffer);
    } 

}


// –––––––––––––––––––––––RESELLING TICKETS–––––––––––––––––––––––––
    // function transfer(address receiver, uint32 tokenID) public {
    //     require(_owners[tokenID]==msg.sender, "Nice try, you cannot transfer someone else's NFT"); // make sure that the from address is the person who currently holds it
    //     require(receiver!=address(0), "You cannot send burn this NFT"); // receiver cannot be 0 address otherwise the NFT will burn

    //     _owners[tokenID] = receiver; // the NFT now points to its owner (receiver)
    // }