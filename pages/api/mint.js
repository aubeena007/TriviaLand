import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";
import { NextApiRequest, NextApiResponse } from "next";

function getRpcUrl() {
  const isTestnet = process.env.IS_TEST_NET || true;
  if (!process.env.NEXT_PUBLIC_RPC_URL) {
    if (isTestnet) {
      return "https://rpc-mumbai.maticvigil.com";
    } else {
      return "https://polygon-rpc.com";
    }
  }
  return process.env.NEXT_PUBLIC_RPC_URL;
}

export default (req, res) => {
  const sdk = new ThirdwebSDK(
    new ethers.Wallet(
      process.env.PRIVATE_KEY,
      ethers.getDefaultProvider(getRpcUrl())
    )
  );

  const nft = sdk.getNFTModule(process.env.NEXT_PUBLIC_NFT_MODULE_ADDRESS);

  function getCard(score) {
    if (score == 1) {
      return {
        image:"https://ipfs.thirdweb.com/ipfs/QmSsohocmcAizr2uJXmoXsr6h6TuCRvfsFeuhX5m529ZcF/0.png"
      };
    }
    else if(score == 2){
      return {
        image:"https://ipfs.thirdweb.com/ipfs/QmZHuEFzqfpHwYKRUbTwA8rwtubWus9Zk32GnEB5BTT7Q8/0.png"
      };
    }
    else if(score == 3){
      return {
        image:"https://ipfs.thirdweb.com/ipfs/Qmajf7TYDxpeJGWtYFjiEvniRfnUJML4UN3uxZDbUSgnrB/0.png"
      };
    }
    else if(score == 4){
      return {
        image:"https://ipfs.thirdweb.com/ipfs/QmV9zTTMvpj2MAAdKQ6A5eyfr21pQQb4YX9wvSZPDo7DKL/0.png"
      };
    }
    else if(score == 5){
      return {
        image:"https://ipfs.thirdweb.com/ipfs/QmfB3suW1MYwmz2BsTqJQo4eXd9HwN4Y6bWdS7Y4Bhx8G5/0.png"
      };
    }
  }

  return new Promise((resolve) => {
    const { account, score } = req.body;
    console.log("minitng");
    nft
      .mintTo(account, {
        name: "TriviaLand",
        description: "TriviaLand Score",
        image:
          getCard(score)
      })
      .then((metadata) => {
        res.status(200).json(metadata);
        resolve();
      });
  });
};
