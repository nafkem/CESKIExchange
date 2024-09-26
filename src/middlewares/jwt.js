"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = exports.generateJwtToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const common_1 = require("../config/common");
const constants_1 = require("../config/constants");
const secretKey = common_1.COMMON_CONFIG.SECURITY_KEY.JwtSecret;
const generateJwtToken = (userData) => {
    const payload = {
        // Include the user data in the payload
        userData,
        // Your other claims here (e.g., user ID, username, etc.)
        // ...
        exp: Math.floor(Date.now() / 1000) + (60 * 5), // Token will expire in 2 minutes from now
    };
    return jsonwebtoken_1.default.sign(payload, secretKey);
};
exports.generateJwtToken = generateJwtToken;
const authenticateToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({ error: constants_1.CONSTANTS.MESSAGES.API_KEY_MISSING });
    }
    if (!authHeader.startsWith('Bearer')) {
        return res.status(401).json({ error: constants_1.CONSTANTS.MESSAGES.INVALID });
    }
    const token = authHeader.substring('Bearer '.length);
    console.log(token);
    jsonwebtoken_1.default.verify(token, secretKey, (err, user) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                // Token is expired
                return res.status(401).json({ error: constants_1.CONSTANTS.MESSAGES.TOKEN_EXPIRED });
            }
            else {
                // Other JWT verification errors (e.g., invalid signature, invalid token)
                return res.status(403).json({ error: constants_1.CONSTANTS.MESSAGES.FORBIDDEN });
            }
        }
        if (!req.body.id)
            return res.status(403).json({ error: constants_1.CONSTANTS.MESSAGES.ERR_USER_NOT_FOUND });
        // Assuming user ID is stored as 'userId' in the userData object and the same in req.body
        if (req.body.id === user["userData"]) {
            next();
        }
        else {
            return res.status(403).json({ error: constants_1.CONSTANTS.MESSAGES.FORBIDDEN });
        }
    });
};
exports.authenticateToken = authenticateToken;
