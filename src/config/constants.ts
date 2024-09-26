// Importing the dotenv library to load environment variables
import * as dotenv from 'dotenv';
dotenv.config();

export class CONSTANTS {
    public static readonly MESSAGES = {
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

    public static readonly AUTH_MESSAGES = {
        EMAIL_EXIST: "Email already registered",
        PHONE_NUMBER_EXIST: "Phone already registered",
        ISNOTMATCH: "Password and confirm password do not match"
    };

    public static readonly CONTRACTDATA = {
        contractAddress: process.env.CONTRACT_ADDRESS || '',
        privateKey: process.env.PRIVATE_KEY || '',
        rpc: process.env.RPC || ''
    };
}
