"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: false,
    },
    surname: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    country: {
        type: String,
        required: false,
    }, network: {
        type: String,
        required: false,
    }, gender: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
    },
    selfie: {
        type: String,
    },
    bio_data: {},
    banking: {},
    created: {
        type: String,
        default: new Date().toISOString(),
    },
    password: {
        type: String,
        required: true,
    },
    lastActive: {
        type: String,
        required: false,
    },
    activated: {
        type: Boolean,
        default: false,
    },
    validated: {
        type: Boolean,
        default: false,
    },
    otp: {
        type: String,
        required: true,
    },
    pin: {
        type: String,
        required: true,
    },
    isPinSet: {
        type: Boolean,
        required: false,
    },
    isLockPinSet: {
        type: Boolean,
        required: false,
    },
    appPin: {
        type: String,
        required: true,
    },
    account: {},
    withdrawHistory: [],
    tbillHistory: [],
    depositHistory: [],
    beneficiary: [],
    transferHistory: []
});
exports.User = mongoose_1.default.model("User", userSchema);
