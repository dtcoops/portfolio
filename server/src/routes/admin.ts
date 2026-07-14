import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { requireAdmin } from '../middleware/requireAdmin';
const router = Router();

router.post('/login', (req: Request, res: Response) => {
  const { password } = req.body;
  const JSON_WEB_TOKEN = process.env.JWT_SECRET as string;
  const PASSWORD = process.env.ADMIN_PASSWORD;

  if (password !== PASSWORD) {
    return res.status(401).json({ error: 'Incorrect password' });
  }

  const token = jwt.sign(
    { role: 'admin' },
    JSON_WEB_TOKEN,
    { expiresIn: '2h' }
  );
  
  res.json({ token });
});

router.get('/test', requireAdmin, (req: Request, res: Response) => {
  res.json({ message: 'You are authenticated!' });
});

export default router;