"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionsTransporter = exports.OTPtransporter = exports.COMMON_CONFIG = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const nodemailer_1 = __importDefault(require("nodemailer"));
class COMMON_CONFIG {
}
exports.COMMON_CONFIG = COMMON_CONFIG;
COMMON_CONFIG.SECURITY_KEY = {
    ConcealSecret: process.env.CONCEALSECRETS || "",
    ApiKey: process.env.API_KEY || "",
    MAIL_KEY: process.env.EMAIL_API_KEY || "",
    JwtSecret: process.env.JWT_SECRET || "",
    JwtExpiration: process.env.JWT_EXPIRY || "",
    JwtRefreshExpiration: process.env.JWT_REFRESH_EXPIRY || "",
    IMGAPIKEY: process.env.IMGAPIKEY || ""
};
COMMON_CONFIG.NETWORK_CONFIG = {
    MongoDBURL: process.env.MONGOURL || "",
    IMGBBURL: process.env.IMGBURL || "",
    TESTNET_RPC: process.env.RPC || "",
    TBILL_VAULT_ADDRESS: process.env.TBILL_VAULT_ADDRESS || "",
    OTP_EMAIL: process.env.OTP_EMAIL || "",
    TRANSACTIONS_EMAIL: process.env.TRANSACTIONS_EMAIL || "",
    MAIL_SENDER: process.env.MAIL_ADDRESS || ""
};
exports.OTPtransporter = nodemailer_1.default.createTransport({
    host: process.env.MAILHOST || "",
    port: parseInt(process.env.MAILPORT || "587", 10), // Convert to number with a default value
    secure: false, // Typically `true` for port 465, `false` for other ports
    auth: {
        user: process.env.OTP_EMAIL || "",
        pass: process.env.OTP_EMAIL_PASSWORD || ""
    }
});
exports.transactionsTransporter = nodemailer_1.default.createTransport({
    host: process.env.MAILHOST || "",
    port: parseInt(process.env.MAILPORT || "465", 10), // Convert to number with a default value
    secure: true, // Use secure for port 465
    auth: {
        user: process.env.TRANSACTIONS_EMAIL || "",
        pass: process.env.TRANSACTIONS_EMAIL_PASSWORD || ""
    }
});
