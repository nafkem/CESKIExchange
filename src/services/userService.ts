import { User } from '../models/user.model';

export class UserService {
  static async registerUser(userData: any) {
    const newUser = new User(userData);
    return newUser.save();
  }

  static async login(credentials: any) {
    const user = await User.findOne({ email: credentials.email });
    if (!user || user.password !== credentials.password) return null;

    return user;
  }

  static async getUserById(userId: string) {
    return User.findById(userId);
  }
}
