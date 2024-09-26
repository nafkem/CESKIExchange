"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import Hardhat Ignition and the necessary modules
const modules_1 = require("@nomicfoundation/hardhat-ignition/modules");
// Address for the cUSD token on the Celo Alfajores testnet
const CUSD_ADDRESS = '0x874069fa1eb16d44d622f2e0ca25eea172369bc1';
const CKESConverterModule = (0, modules_1.buildModule)("CKESConverterModule", (m) => {
    // Deploy CKESConverter contract with the cUSD token address as a parameter
    const cKESConverter = m.contract("CKESConverter", [CUSD_ADDRESS]);
    return { cKESConverter };
});
exports.default = CKESConverterModule;
//CKESConverterModule#CKESConverter - 0xFA6424E600c0bab13A332F342CEce3ad5c6Bd025
