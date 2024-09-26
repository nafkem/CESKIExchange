import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { CONSTANTS } from '../config/constants';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: CONSTANTS.MESSAGES.UNAUTHORIZED });
  }

  jwt.verify(token, CONSTANTS.CONTRACTDATA.privateKey, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: CONSTANTS.MESSAGES.UNAUTHORIZED });
    }

    req.body.userId = decoded.id;
    next();
  });
};
