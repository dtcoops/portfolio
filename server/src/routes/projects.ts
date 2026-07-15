import { Router, Request, Response } from "express";
import { Project } from '../models/project';
import { requireAdmin } from "../middleware/requireAdmin";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});

router.post('/', requireAdmin, async (req: Request, res: Response) => {
  try {
    const newProject = new Project(req.body);
    const saved = await newProject.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create project', details: error });
  }
});

router.put('/:id', requireAdmin, async (req: Request, res: Response) => {
  try {
    const updated = await Project.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update project', details: error });
  }
});

router.delete('/:id', requireAdmin, async (req: Request, res: Response) => {
  try {
    const deleted = await Project.findOneAndDelete({ id: req.params.id });

    if (!deleted) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json({ message: 'Project deleted', project: deleted });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete project' });
  }
});

export default router;