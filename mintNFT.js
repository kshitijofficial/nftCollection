import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
import { readFileSync } from "fs";
const sdk = ThirdwebSDK.fromPrivateKey("devnet", "Your Private Key");
const myNftCollection = await sdk.getNFTCollection(
  "DjfAv4MF9TXPvwphVeFLhzn1H71x2kxRoZCUrhQsQrPe"
);

const meta = {
  name: "Blockchain ",
  description: "Nice",
  image: readFileSync("./code.png"),
};

const mintNFT = await myNftCollection.mint(meta);
console.log(mintNFT);

const nftMinted = await myNftCollection.getAll();
console.log(nftMinted);
