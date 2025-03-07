import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  if (!req.headers.authorization) {
    res.status(401).json({ error: 'Authorization required' });
  } else {
    next();
  }
};
