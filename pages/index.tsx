import { Box, Button, Text, Image, Center, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Home from "../components/Home";
import RoadmapSection from "../components/Roadmap";
import TicketSection from "../components/TypesOfTickets";
import WhyWeDifferentSection from "../components/WhyWeDifferent";
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const contractAddress = "0xBDD9FA26Fe1d7f5A78244301a3D6be8be24e08ff";
const IndexPage = () => {
  const [contract, setcontract] = useState<any>();
  const [wallet, setWallet] = useState<string>();
  useEffect(() => {
    (async () => {
      // @ts-expect-error
      if (!window.ethereum) alert("Please install Metamask");
      const wal = await web3.eth.requestAccounts();
      const con = new web3.eth.Contract(
        [
          {
            inputs: [
              {
                internalType: "string",
                name: "_ipfsBaseURI",
                type: "string",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [],
            name: "bronzeTicketTokenId",
            outputs: [
              {
                internalType: "uint32",
                name: "",
                type: "uint32",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint32",
                name: "tokenId",
                type: "uint32",
              },
            ],
            name: "burn",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "goldTicketTokenId",
            outputs: [
              {
                internalType: "uint32",
                name: "",
                type: "uint32",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "minter",
                type: "address",
              },
            ],
            name: "mintBronzeTicket",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "minter",
                type: "address",
              },
            ],
            name: "mintGoldTicket",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "minter",
                type: "address",
              },
            ],
            name: "mintSilverTicket",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint32",
                name: "tokenId",
                type: "uint32",
              },
            ],
            name: "ownerOf",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "silverTicketTokenId",
            outputs: [
              {
                internalType: "uint32",
                name: "",
                type: "uint32",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint32",
                name: "value",
                type: "uint32",
              },
            ],
            name: "toString",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint32",
                name: "",
                type: "uint32",
              },
            ],
            name: "tokenURIs",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint64",
                name: "_amount",
                type: "uint64",
              },
            ],
            name: "withdrawToOwner",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        contractAddress
      );
      setcontract(con);
      setWallet(wal[0]);
    })();
  }, []);
  const getBase = () => 10 ** 17;
  return (
    <>
      <Button
        onClick={async () => {
          console.log(contract.methods);
          contract.methods
            .mintBronzeTicket(wallet)
            .send({ from: wallet, value: getBase() });

          // contract.methods
          //   .transfer(BigInt(10 ** 17))
          //   .send({ from: wallet, value: 10 ** 17 });
        }}
      >
        Bronze ticket
      </Button>
      <Button
        onClick={async () => {
          // contract.methods
          //   .mintSilverTicket(wallet)
          //   .send({ from: wallet, value: 2 * getBase() });
          contract.methods
            .withdrawToOwner(BigInt(2 * 10 ** 17))
            .send({ from: wallet });
        }}
      >
        Silver ticket
      </Button>
      <Button
        onClick={async () => {
          contract.methods
            .mintGoldTicket(wallet)
            .send({ from: wallet, value: BigInt(30 ** 17) });
        }}
      >
        Gold ticket
      </Button>
      {/* <Home />
      <TicketSection />
      <WhyWeDifferentSection />
    <RoadmapSection /> */}
    </>
  );
};
export default IndexPage;
