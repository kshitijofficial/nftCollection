import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";

const sdk = ThirdwebSDK.fromPrivateKey("devnet", "Your Private Key");

const nftCollection = await sdk.deployer.createNftCollection({
  name: "Blockchain Course Collection",
  description: "Blockchain best courses",
});
console.log(nftCollection);
