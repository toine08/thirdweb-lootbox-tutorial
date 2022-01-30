import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import type { PackMetadataWithBalance } from "@3rdweb/sdk";
import { useEffect,useState } from "react";
import { packAddress } from "../lib/contractAddress";

export function getStaticProps() {
  return {
    props: {
      title: "Winner's Lounge",
    },
  };
}

export default function Lounge() {
  return <p>You need to own some NFTs to access the lounge!</p>;
}
