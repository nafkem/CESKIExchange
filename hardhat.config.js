"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@openzeppelin/hardhat-upgrades");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv/config");
require("@nomicfoundation/hardhat-ignition-ethers");
const { API_URL, PRIVATE_KEY, CHAIN_ID, CELOSCAN_API_KEY } = process.env;
if (!PRIVATE_KEY) {
    throw new Error("Please set your PRIVATE_KEY in the .env file");
}
const config = {
    solidity: "0.8.24",
    defaultNetwork: "alfajores",
    networks: {
        alfajores: {
            url: API_URL || "https://alfajores-forno.celo-testnet.org",
            accounts: [PRIVATE_KEY],
            chainId: CHAIN_ID ? parseInt(CHAIN_ID) : 44787, // Use default chainId if not defined
        },
    },
    etherscan: {
        apiKey: CELOSCAN_API_KEY || "", // Fallback for CELOSCAN_API_KEY
    },
};
exports.default = config;
