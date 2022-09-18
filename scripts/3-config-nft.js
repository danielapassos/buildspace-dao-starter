import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x736d1f699237C5e04b1B235bc7EDc8f40BC215fD");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Thoux Membership",
        description: "A DAO for web3 education.",
        image: readFileSync("scripts/assets/artifact.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();