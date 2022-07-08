import { Request, Response } from "express";
import { scheduleService } from "../services/schedule.service";

const scheduleController = {
  index: async (req: Request, res: Response) => {
    try {
        const schedules = await scheduleService.index();
      return res.status(200).json(schedules);
    } catch (error) {
      if (error instanceof Error) return res.status(400).json(error);
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const schedule = await scheduleService.create(req.body);
      return res.status(200).json(schedule);
    } catch (error) {
      if (error instanceof Error) return res.status(400).json(error);
    }
  },
};

export { scheduleController };
