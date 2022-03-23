const { Connection, LAMPORTS_PER_SOL, Keypair } = require("@solana/web3.js");
const { Contract, Program } = require("@solana/solidity");
const { readFileSync } = require("fs");

const SOLOTTO_ABI = JSON.parse(readFileSync("./Solotto.abi", "utf8"));
const PROGRAM_SO = readFileSync("./bundle.so");

(async function () {
  try {
    console.log("Connecting to your local Solana node ...");
    const connection = new Connection(
      "https://api.devnet.solana.com",
      "confirmed"
    );

    const payer = Keypair.generate();

    console.log("Airdropping SOL to a new wallet ...");
    const signature = await connection.requestAirdrop(
      payer.publicKey,
      1266941440
    );

    console.log("SIGNED BABY");
    await connection.confirmTransaction(signature, "confirmed");
    console.log("TRANSACTION CONFIERMED");
    const program = Keypair.generate();
    const storage = Keypair.generate();

    const contract = new Contract(
      connection,
      program.publicKey,
      storage.publicKey,
      SOLOTTO_ABI,
      payer
    );

    console.log("CONTRACT CREATED");
    await contract.load(program, PROGRAM_SO);

    console.log(
      "Program deployment finished, deploying the Solotto contract ..."
    );
    // 3084
    const deployment = await contract.deploy(
      "Solotto",
      [],
      program,
      storage,
      8000
    );
    console.log("DEPLOYED", deployment);

    const res = await contract.functions.name();
    console.log("Name of collection: " + res.result);

    const contractAddress = await contract.functions.getContractAddress();
    console.log("Name of collection: " + contractAddress.result);
  } catch (err) {
    console.log("THE ERROR:", err.message);
  }
})();
// 0xd50cc2595b77c40a9d10f57a48dfa1078d984de057adb6f67793955fa6e24b14
// 8i45VWKDtALA99JExqwvBhVsC3WSDr4ZNSNLZ8ycNUSp
