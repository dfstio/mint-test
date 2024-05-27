"use client";

export async function getAccount(): Promise<string | undefined> {
  const accounts = await (window as any)?.mina?.requestAccounts();
  console.log("Accounts", accounts);
  let address: string | undefined = undefined;
  if (accounts?.code === undefined && accounts?.length > 0) {
    address = accounts[0];
    console.log("Address", address);
  }
  return address;
}

export async function sendClientTx(value: number) {
  console.log("sendClientTx");
  const { Field, PublicKey, fetchAccount, Mina } = await import("o1js");
  const { SignTestContract, initBlockchain } = await import("minanft");

  console.time("SignTestContract compiled");
  await SignTestContract.compile();
  console.timeEnd("SignTestContract compiled");

  const address = await getAccount();
  if (address === undefined) {
    console.log("No account");
    return undefined;
  }
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
  console.log("Tx created", tx);
  console.time("proved");
  await tx.prove();
  console.timeEnd("proved");

  const transaction = tx.toJSON();
  const txResult = await (window as any).mina?.sendTransaction({
    transaction,
    feePayer: {
      fee: fee,
      memo: memo,
    },
  });
  console.log("Tx result", txResult);
}
