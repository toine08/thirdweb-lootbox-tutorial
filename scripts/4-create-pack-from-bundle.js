import { readFileSync } from "fs";
import { sdk } from './helpers.js';

async function main(){
    const bundleModuleAddress = '0x10A5Bcb787Cb5b3d8E34027f98f6bf6800FfdAB6';
    const bundleModule = sdk.getBundleModule(bundleModuleAddress);

    const packModuleAddress = '0x119503B7fFb03B2853B93F927D4c674456E58879';
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log("Getting all NFTs from bundle...");
    const nftsInBundle = await bundleModule.getAll();

    console.log('NFTs in bundle: ');
    console.log(nftsInBundle);

    console.log('Creating a pack containing the NFTs from bundle...');
    const created = await packModule.create({
        assetContract: bundleModuleAddress,
        metadata:{
            name: 'Awesome cars pack!',
            image: readFileSync('./assets/awesome.jpeg'),
        },
        assets: nftsInBundle.map(nft => ({
            tokenId: nft.metadata.id,
            amount: nft.supply,
        })),
    });
    console.log('pack created!');
    console.log(created)

}
try{
    await main();
}catch(error){
    console.error("Error minting the NFTs",error);
    process.exit(1);
}