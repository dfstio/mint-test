"use client";

/*
import { sendServerTx } from "./server-tx";
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

export async function clientCall(value: number) {
  console.log("clientCall");
  const address = await getAccount();
  if (address === undefined) {
    console.log("No account");
    return undefined;
  }
  console.log("clientCall address", address);

  const { transaction, fee, memo } = await sendServerTx(value, address);

  const txResult = await (window as any).mina?.sendTransaction({
    transaction,
    feePayer: {
      fee: fee,
      memo: memo,
    },
  });

  console.log("Tx result", txResult);
}
*/
