import { ethers } from "ethers";
import CKES_ABI from "../config/CKESConverter.json";
import { CKESConverter } from "../../typechain-types/contracts/CKESConverter"; // Typechain typing

const provider = new ethers.providers.JsonRpcProvider("https://alfajores-forno.celo.org"); // Celo provider
const privateKey = "YOUR_PRIVATE_KEY"; // Replace with your private key
const wallet = new ethers.Wallet(privateKey, provider);

// Contract setup
const cKESContract: CKESConverter = new ethers.Contract(
  "DEPLOYED_CONTRACT_ADDRESS", // Deployed CKESConverter contract address
  CKES_ABI,
  wallet
) as CKESConverter;

export async function onRampTransaction(fiatTransactionId: string, fiatAmountKES: number) {
  try {
    const tx = await cKESContract.onRamp(fiatTransactionId, fiatAmountKES);
    await tx.wait();  // Wait for the transaction to be mined
    return tx;
  } catch (error) {
    console.error("Error performing onRamp: ", error);
    throw new Error("onRamp transaction failed.");
  }
}

export async function offRampTransaction(cKESAmount: number, fiatPaymentDetails: string) {
  try {
    const tx = await cKESContract.offRamp(cKESAmount, fiatPaymentDetails);
    await tx.wait();  // Wait for the transaction to be mined
    return tx;
  } catch (error) {
    console.error("Error performing offRamp: ", error);
    throw new Error("offRamp transaction failed.");
  }
}
