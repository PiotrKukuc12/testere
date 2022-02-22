import ethers from 'ethers';
import { nftAbi } from './nft.js';

const address = '0x6eD68456948E7f49de77d6De61e4c725B2444989';
const provider = new ethers.providers.getDefaultProvider('rinkeby');
const signer = new ethers.Wallet(
  'c1b5807809f8f7920c5e7887cad618b433b775f98f3cdfdee93311b32b6431b2',
  provider
);

const contract = new ethers.Contract(address, nftAbi, signer);
const fnc = async () => {
  const rev = await contract.revealed()
  console.log(rev);
};

fnc();
