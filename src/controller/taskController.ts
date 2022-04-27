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
};

export { taskController };
