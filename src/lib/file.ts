"use client";

import axios from "axios";

export async function getFileData(params: {
  file: File;
  pinataJWT: string;
  isPrivate?: boolean;
}) {
  const { file, pinataJWT } = params;
  const isPrivate = params.isPrivate === true ? true : false;
  let height = 0;
  const { Field } = await import("o1js");
  const { FileData } = await import("minanft");
  let root = Field(0);
  let storage = "";
  //  "UBSdn4FVQRB1q6qAT7gjVb6TbNAC+Rqo3PS5GpDSaBzLLI4yHuJB8lQV7GFFvxSZKLo/commzF9LsaUGE4Sv3Q==";

  if (isPrivate !== true) {
    const hash = await saveToIPFS({
      data: await file.arrayBuffer(),
      pinataJWT,
      name: file.name,
      keyvalues: { version: "2" },
    });
    console.log("saveToIPFS hash:", hash);
    if (hash === undefined) {
      console.error("getFileData error: IPFS hash is undefined");
      return undefined;
    }
    storage = `i:${hash}`;
  }

  return new FileData({
    fileRoot: root,
    height,
    size: file.size,
    mimeType: file.type.substring(0, 30),
    sha3_512:
      "UBSdn4FVQRB1q6qAT7gjVb6TbNAC+Rqo3PS5GpDSaBzLLI4yHuJB8lQV7GFFvxSZKLo/commzF9LsaUGE4Sv3Q==",
    filename: file.name.substring(0, 30),
    storage,
  });
}

export async function saveToIPFS(params: {
  data: any;
  pinataJWT: string;
  name: string;
  keyvalues?: object;
}): Promise<string | undefined> {
  const { data, pinataJWT, name, keyvalues } = params;
  console.log("saveToIPFS:", { name });

  try {
    const pinataData = {
      pinataOptions: {
        cidVersion: 1,
      },
      pinataMetadata: {
        name,
        keyvalues,
      },
      pinataContent: data,
    };
    const str = JSON.stringify(pinataData);
    const auth = "Bearer " + pinataJWT ?? "";

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: auth,
      },
    };

    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      str,
      config
    );

    console.log("saveToIPFS result:", { result: res.data, name, keyvalues });
    return res.data.IpfsHash;
  } catch (error: any) {
    console.error("saveToIPFS error:", error?.message, { name, keyvalues });
    return undefined;
  }
}
