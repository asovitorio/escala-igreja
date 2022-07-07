import { Request, Response } from "express";
import { taskService } from "../services/task.service";

const taskController = {
  index: async (req: Request, res: Response) => {
    try {
      const task = await taskService.findAlltasks();
      return res.status(200).json(task);
    } catch (error) {
      return res.status(200).json(error);
    }
  },
  show: async (req: Request, res: Response) => {
    try {
      const task = await taskService.findById(req.params.id);
      return res.status(200).json(task);
    } catch (error) {
      return res.status(200).json(error);
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const task = await taskService.create(req.body);
      return res.status(201).json(task);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  update: async (req: Request, res: Response) => {
    
    try {
      const task = await taskService.update(req.body);
      return res.status(200).json(task);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  delete: async (req: Request, res: Response) => {

    const id =Object.keys(req.body).length>0?req.body.id:req.params.id
      
    try {
      const task = await taskService.delete(id);
      return res.status(200).json(task);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};

export { taskController };
