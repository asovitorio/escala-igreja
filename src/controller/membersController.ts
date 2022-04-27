import { Request, Response } from "express";
import { memberService } from "../services/member.service";
const membersController = {
  index: async (req: Request, res: Response) => {
    try {
            const members = await memberService.findAllMembers();
      return res.status(200).json(members);
    } catch (error) {
      if(error instanceof Error)
      return res.status(400).json(error.message);
    }
  },
  showById: async (req: Request, res: Response) => {
    try {
      const {id} = req.params
          const member = await memberService.findById(id)
      return res.status(200).json(member);
    } catch (error) {
      if(error instanceof Error)
      return res.status(400).json(error.message);
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const member = await memberService.create(req.body)
      return res.status(201).json(member);
    } catch (error) {
      if(error instanceof Error)
      return res.status(401).json(error.message);
      
    }
  }
};

export { membersController };
