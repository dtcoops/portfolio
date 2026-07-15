import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db/db';
import projectRoutes from './routes/projects';
import adminRoutes from './routes/admin';

dotenv.config();

const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN?.split(',') ?? [] }));
app.use(express.json());

const PRIVATE_KEY = process.env.JWT_SECRET;
app.use('/api/projects', projectRoutes);
app.use('/api/admin', adminRoutes);console.log('JWT_SECRET loaded:', !!PRIVATE_KEY);

const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});