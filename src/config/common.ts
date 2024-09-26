import * as dotenv from 'dotenv';
dotenv.config();
import nodemailer from 'nodemailer';

export class COMMON_CONFIG {
  public static readonly SECURITY_KEY = {
    ConcealSecret: process.env.CONCEALSECRETS || "",
    ApiKey: process.env.API_KEY || "",
    MAIL_KEY: process.env.EMAIL_API_KEY || "",
    JwtSecret: process.env.JWT_SECRET || "",
    JwtExpiration: process.env.JWT_EXPIRY || "",
    JwtRefreshExpiration: process.env.JWT_REFRESH_EXPIRY || "",
    IMGAPIKEY: process.env.IMGAPIKEY || ""
  };

  public static readonly NETWORK_CONFIG = {
    MongoDBURL: process.env.MONGOURL || "",
    IMGBBURL: process.env.IMGBURL || "",
    TESTNET_RPC: process.env.RPC || "",
    TBILL_VAULT_ADDRESS: process.env.TBILL_VAULT_ADDRESS || "",
    OTP_EMAIL: process.env.OTP_EMAIL || "",
    TRANSACTIONS_EMAIL: process.env.TRANSACTIONS_EMAIL || "",
    MAIL_SENDER: process.env.MAIL_ADDRESS || ""
  };
}

export const OTPtransporter = nodemailer.createTransport({
  host: process.env.MAILHOST || "",
  port: parseInt(process.env.MAILPORT || "587", 10), // Convert to number with a default value
  secure: false, // Typically `true` for port 465, `false` for other ports
  auth: {
    user: process.env.OTP_EMAIL || "",
    pass: process.env.OTP_EMAIL_PASSWORD || ""
  }
});

export const transactionsTransporter = nodemailer.createTransport({
  host: process.env.MAILHOST || "",
  port: parseInt(process.env.MAILPORT || "465", 10), // Convert to number with a default value
  secure: true, // Use secure for port 465
  auth: {
    user: process.env.TRANSACTIONS_EMAIL || "",
    pass: process.env.TRANSACTIONS_EMAIL_PASSWORD || ""
  }
});
