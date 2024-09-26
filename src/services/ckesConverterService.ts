import Web3 from 'web3';
import { CONSTANTS } from '../config/constants';
import CKESConverterABI from '../config/CKESConverter.json';

export class CKESConverterService {
  private static web3 = new Web3(CONSTANTS.CONTRACTDATA.rpc);
  private static contract = new CKESConverterService.web3.eth.Contract(CKESConverterABI, CONSTANTS.CONTRACTDATA.contractAddress);

  static async onRamp(fiatTransactionId: string, fiatAmountKES: number, userAddress: string) {
    const privateKey = CONSTANTS.CONTRACTDATA.privateKey;
    const nonce = await this.web3.eth.getTransactionCount(userAddress);

    const tx = {
      from: userAddress,
      to: CONSTANTS.CONTRACTDATA.contractAddress,
      data: this.contract.methods.onRamp(fiatTransactionId, fiatAmountKES).encodeABI(),
      nonce,
      gas: 500000,
    };

    const signedTx = await this.web3.eth.accounts.signTransaction(tx, privateKey);
    const receipt = await this.web3.eth.sendSignedTransaction(signedTx.rawTransaction!);

    return receipt;
  }

  static async offRamp(cKESAmount: number, userAddress: string, fiatPaymentDetails: string) {
    const privateKey = CONSTANTS.CONTRACTDATA.privateKey;
    const nonce = await this.web3.eth.getTransactionCount(userAddress);

    const tx = {
      from: userAddress,
      to: CONSTANTS.CONTRACTDATA.contractAddress,
      data: this.contract.methods.offRamp(cKESAmount, fiatPaymentDetails).encodeABI(),
      nonce,
      gas: 500000,
    };

    const signedTx = await this.web3.eth.accounts.signTransaction(tx, privateKey);
    const receipt = await this.web3.eth.sendSignedTransaction(signedTx.rawTransaction!);

    return receipt;
  }
}

// services/ckesService.ts
import { ethers } from "ethers";
import CKES_ABI from "../config/CKESConverter.json";
import { CKESConverter } from "../../typechain-types/contracts/CKESConverter"; // Ensure correct path

const provider = new ethers.providers.JsonRpcProvider("https://alfajores-forno.celo.org");
const privateKey = "YOUR_PRIVATE_KEY"; // Replace with your private key
const wallet = new ethers.Wallet(privateKey, provider);

// Initialize your contract instance here
const cKESContract: CKESConverter = new ethers.Contract(
  "DEPLOYED_CONTRACT_ADDRESS", // Your deployed contract address
  CKES_ABI,
  wallet
) as CKESConverter;

export class CKESService {
  public static async onRamp(fiatTransactionId: string, fiatAmountKES: number): Promise<any> {
    // Call the contract's onRamp function and return the result
    const tx = await cKESContract.onRamp(fiatTransactionId, fiatAmountKES);
    await tx.wait(); // Wait for the transaction to be mined
    return tx; // Return the transaction result
  }

  public static async offRamp(cKESAmount: number, fiatPaymentDetails: string): Promise<any> {
    // Call the contract's offRamp function and return the result
    const tx = await cKESContract.offRamp(cKESAmount, fiatPaymentDetails);
    await tx.wait(); // Wait for the transaction to be mined
    return tx; // Return the transaction result
  }
}

