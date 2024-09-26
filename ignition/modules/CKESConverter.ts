// Import Hardhat Ignition and the necessary modules
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// Address for the cUSD token on the Celo Alfajores testnet
const CUSD_ADDRESS = '0x874069fa1eb16d44d622f2e0ca25eea172369bc1'; 

const CKESConverterModule = buildModule("CKESConverterModule", (m) => {
  // Deploy CKESConverter contract with the cUSD token address as a parameter
  const cKESConverter = m.contract("CKESConverter", [CUSD_ADDRESS]);

  return { cKESConverter };
});

export default CKESConverterModule;

//CKESConverterModule#CKESConverter - 0xFA6424E600c0bab13A332F342CEce3ad5c6Bd025