import { Box, Button, Text, Image, Center, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import * as web3 from "@solana/web3.js";

import Home from "../components/Home";
import RoadmapSection from "../components/Roadmap";
import TicketSection from "../components/TypesOfTickets";
import WhyWeDifferentSection from "../components/WhyWeDifferent";

const IndexPage = () => {
  const [contract, setcontract] = useState<any>();
  const [wallet, setWallet] = useState<string>();
  useEffect(() => {
    // let keypair = web3.Keypair.generate();
    // let connection = new web3.Connection(web3.clusterApiUrl("devnet"));

    (async () => {
      const rpcUrl = "https://api.devnet.solana.com";
      const connection = new web3.Connection(rpcUrl, "confirmed");

      const keyPair = web3.Keypair.generate();

      let airdropSignature = await connection.requestAirdrop(
        keyPair.publicKey,
        web3.LAMPORTS_PER_SOL
      );
      // console.log(airdropSignature);
      await connection.confirmTransaction(airdropSignature);
      let balance = await connection.getBalance(keyPair.publicKey);
      // console.log(`balance: ${balance}`);

      const splaccount = web3.Keypair.generate();
      const transaction = new web3.Transaction();
      const programId = new web3.PublicKey(
        "8i45VWKDtALA99JExqwvBhVsC3WSDr4ZNSNLZ8ycNUSp"
      );
      const instruction = web3.SystemProgram.createAccount({
        fromPubkey: keyPair.publicKey,
        newAccountPubkey: splaccount.publicKey,
        space: 80000,
        lamports: 1000,
        programId,
      });
      setcontract(instruction);
      transaction.add(instruction);
      // var signature = await solanaWeb3.sendAndConfirmTransaction(
      //   connection,
      //   transaction,
      //   [keypair, splaccount]
      // );
      // console.log(signature);
    })();
  }, []);
  console.log("MY CONTRACT:", contract && contract.data.toString());
  // const getBase = () => 10 ** 17;
  return (
    <>
      {/* <Button
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
      </Button> */}
      {/* <Home />
      <TicketSection />
      <WhyWeDifferentSection />
    <RoadmapSection /> */}
    </>
  );
};
export default IndexPage;
