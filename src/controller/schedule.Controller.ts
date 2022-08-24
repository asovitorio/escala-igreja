import { Request, Response } from "express";
import { scheduleService } from "../services/schedule.service";

const scheduleController = {
  index: async (req: Request, res: Response) => {
    try {
        const schedules = await scheduleService.index();
      return res.status(200).json(schedules);
    } catch (error) {
      if (error instanceof Error) return res.status(400).json(error.message);
    }
  },
  show: async (req: Request, res: Response) => {
    try {
      const {id} = req.params
      const schedule = await scheduleService.findById(id);
      return res.status(200).json(schedule);
    } catch (error) {
      if (error instanceof Error) return res.status(400).json(error.message);
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const schedule = await scheduleService.create(req.body);
      return res.status(200).json(schedule);
    } catch (error) {
      if (error instanceof Error) return res.status(400).json(error.message);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const schedule = await scheduleService.create(req.body);
      return res.status(200).json(schedule);
    } catch (error) {
      if (error instanceof Error) return res.status(400).json(error.message);
    }
  },
};

export { scheduleController };
