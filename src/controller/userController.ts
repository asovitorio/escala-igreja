
import { Request, Response } from "express";
import { userService } from "../services/user.service";

const userController = {
  index: async (req: Request, res: Response) => {
    try {
    const users = await userService.findAllUser()
      return res.status(200).json(users);
    } catch (error) {

      return res.status(400).json(error);
    }
  },
};

export { userController };
