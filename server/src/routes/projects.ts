import { Router, Request, Response } from "express";
import { Project } from '../models/Projects';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});

export default router;