"use server";

/*
import { Field, PublicKey, fetchAccount, Mina } from "o1js";
import { SignTestContract, initBlockchain } from "minanft";

export async function sendServerTx(value: number, address: string) {
  console.log("sendServerTx");
  //const { Field, PublicKey, fetchAccount, Mina } = await import("o1js");
  //const { SignTestContract, initBlockchain } = await import("minanft");

  console.time("SignTestContract compiled");
  await SignTestContract.compile();
  console.timeEnd("SignTestContract compiled");

  console.time("transaction created");
  const contractAddress =
    "B62qk7nXjEzGJdyQFNVs5UauASTQJgiJSBpHJmDcFTiYQrDDTGDsNFT";
  const zkAppPublicKey = PublicKey.fromBase58(contractAddress);
  const sender = PublicKey.fromBase58(address);
  const zkApp = new SignTestContract(zkAppPublicKey);
  await initBlockchain("devnet");
  await fetchAccount({ publicKey: zkAppPublicKey });
  await fetchAccount({ publicKey: sender });
  const fee = 200_000_000;
  const memo = `value: ${value}`;
  const tx = await Mina.transaction({ sender, fee, memo }, async () => {
    await zkApp.setValue(Field(value));
  });
  console.timeEnd("transaction created");

  const transaction = tx.toJSON();
  console.log("Tx created", transaction);

  return { transaction, fee, memo };
}
*/
