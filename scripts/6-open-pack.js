import {sdk} from "./helpers.js";

async function main(){
    const packModuleAddress = '0x119503B7fFb03B2853B93F927D4c674456E58879';
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log('Opening the pack... 📦 ');
    const opened = await packModule.open('0');
    console.log('Opened the pack !');
    console.log(opened);
}

try{
    await main();
}catch(error){
    console.error("Error opening the pack", error);
    process.exit(1);
}