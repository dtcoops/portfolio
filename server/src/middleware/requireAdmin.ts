import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const PRIVATE_KEY = process.env.JWT_SECRET as string;
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    jwt.verify(token, PRIVATE_KEY);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}