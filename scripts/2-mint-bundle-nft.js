import { readFileSync } from "fs";
import {sdk} from './helpers.js';

async function main(){
    const bundleModuleAddress = '0x10A5Bcb787Cb5b3d8E34027f98f6bf6800FfdAB6';
    const bundleModule = sdk.getBundleModule(bundleModuleAddress);

    console.log('Creating NFT batch ...💧 ');
    const created = await bundleModule.createAndMintBatch([
        {
            metadata: {
                name: 'Tesla ',
                description: 'A pretty fancy car!',
                image: readFileSync('./assets/tesla.jpeg'),
                properties: {
                  rarity: 'a bit rare',
                  fanciness: 7,
                }
              },
              supply: 50,
            },
            {
              metadata: {
                name: 'Hyundai grandeur concept',
                description: 'A pretty cyberpunk retro car',
                image: readFileSync('./assets/hyundai.jpeg'),
                properties: {
                  rarity: 'super rare',
                  fanciness: 10,
                }
              },
              supply: 10,
            },
            {
              metadata: {
                name: 'Cadillac',
                description: 'A super old car!',
                image: readFileSync('./assets/cadillac.jpeg'),
                properties: {
                  rarity: 'a bit rare!',
                  fanciness:50,
                }
              },
              supply: 10,
        }
    ]);
    console.log('NFT created ! 🛹 ');
    console.log(JSON.stringify(created, null, 2));
}
try {
    await main();
  } catch (error) {
    console.error("Error minting the NFTs 🙅‍♂️ ", error);
    process.exit(1);
  }