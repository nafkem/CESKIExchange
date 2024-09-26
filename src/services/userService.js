"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_model_1 = require("../models/user.model");
class UserService {
    static async registerUser(userData) {
        const newUser = new user_model_1.User(userData);
        return newUser.save();
    }
    static async login(credentials) {
        const user = await user_model_1.User.findOne({ email: credentials.email });
        if (!user || user.password !== credentials.password)
            return null;
        return user;
    }
    static async getUserById(userId) {
        return user_model_1.User.findById(userId);
    }
}
exports.UserService = UserService;
