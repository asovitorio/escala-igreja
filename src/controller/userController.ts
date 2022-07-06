import { Request, Response } from "express";
import { userService } from "../services/user.service";

const userController = {
  index: async (req: Request, res: Response) => {
    try {
      const users = await userService.findAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  show: async (req: Request, res: Response) => {
    try {
      const users = await userService.findAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const user = await userService.create(req.body);
      return res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) return res.status(400).json(error.message);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const user = await userService.update(req.body);
      return res.status(200).json(user);
    } catch (error) {
      if (error instanceof Error) return res.status(400).json(error.message);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const user = await userService.delete(req.body.id)
      return res.status(200).json(user);
    } catch (error) {
      if (error instanceof Error) return res.status(400).json(error.message);
    }
  },
};

export { userController };
