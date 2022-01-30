import { ethers } from "ethers";
import type { ContractInterface } from "ethers";
import { useEffect } from "react";
import { packAddress } from "../lib/contractAddress";
import packABI from "../utils/PackABI.json";
import { useWeb3 } from "@3rdweb/hooks";