import { ethers } from "ethers";
import { sdk } from "./helpers.js";

async function main(){
    const packModuleAddress = '0x119503B7fFb03B2853B93F927D4c674456E58879';
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log('Depositing link...🎟 ');

    //Link uses 18 decimals, same as eth. so this gives us the amount to use for 2 link
    const amount = ethers.utils.parseEther('2');

    await packModule.depositLink(amount);
    console.log('Deposited ! ✈ ');

    const balance = await packModule.getLinkBalance();
    console.log(balance);
}

try{
    await main();
}catch(error){
    console.error("Error depositing the Link", error);
    process.exit(1);
}