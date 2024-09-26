import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { CONSTANTS } from '../config/constants';

export class UserController {
  static async register(req: Request, res: Response) {
    try {
      const user = await UserService.registerUser(req.body);
      return res.status(201).json({ message: 'User registered successfully', user });
    } catch (err: unknown) {
      // Check if err is an instance of Error
      if (err instanceof Error) {
        return res.status(500).json({ message: CONSTANTS.MESSAGES.ERROR_OCCURED, error: err.message });
      }
      return res.status(500).json({ message: CONSTANTS.MESSAGES.ERROR_OCCURED, error: "An unknown error occurred." });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const user = await UserService.login(req.body);
      if (!user) return res.status(401).json({ message: CONSTANTS.MESSAGES.UNAUTHORIZED });

      return res.status(200).json({ message: 'Login successful', user });
    } catch (err: unknown) {
      // Check if err is an instance of Error
      if (err instanceof Error) {
        return res.status(500).json({ message: CONSTANTS.MESSAGES.ERROR_OCCURED, error: err.message });
      }
      return res.status(500).json({ message: CONSTANTS.MESSAGES.ERROR_OCCURED, error: "An unknown error occurred." });
    }
  }
}
