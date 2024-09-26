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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONSTANTS = void 0;
// Importing the dotenv library to load environment variables
const dotenv = __importStar(require("dotenv"));
dotenv.config();
class CONSTANTS {
}
exports.CONSTANTS = CONSTANTS;
CONSTANTS.MESSAGES = {
    ERR_URL_NOT_FOUND: "Url not found.",
    ERR_USER_NOT_FOUND: "User not found.",
    API_KEY_MISSING: "Missing API key",
    PING_SUCCESS: "Ping successful!",
    LIVE: "API is live",
    TOKEN_EXPIRED: "This token is expired",
    UNAUTHORIZED: "Unauthorized",
    INVALID: "Invalid Format",
    UNAUTHORIZED_ACCESS: "Unauthorized access",
    ERROR_OCCURED: "Some error occurred",
    SUCCESS: "Success",
    PORT: 3000,
    FORBIDDEN: "Invalid User Access"
};
CONSTANTS.AUTH_MESSAGES = {
    EMAIL_EXIST: "Email already registered",
    PHONE_NUMBER_EXIST: "Phone already registered",
    ISNOTMATCH: "Password and confirm password do not match"
};
CONSTANTS.CONTRACTDATA = {
    contractAddress: process.env.CONTRACT_ADDRESS || '',
    privateKey: process.env.PRIVATE_KEY || '',
    rpc: process.env.RPC || ''
};
