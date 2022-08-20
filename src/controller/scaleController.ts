import { Request, Response } from "express";
import { scaleService } from "../services/scale.service";

const scaleController = {
  index: async (req: Request, res: Response) => {
    try {
      return res.status(200).json({ msg: "teste" });
    } catch (error) {
        if(error instanceof Error)
      return res.status(400).json(error.message);
    }
  },
  show: async (req: Request, res: Response) => {
    try {
      return res.status(200).json({ msg: "teste" });
    } catch (error) {
        if(error instanceof Error)
      return res.status(400).json(error.message);
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const scale = await scaleService.create(req.body)
      return res.status(201).json(scale);
    } catch (error) {
        if(error instanceof Error)
      return res.status(400).json(error.message);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      return res.status(200).json({ msg: "teste" });
    } catch (error) {
        if(error instanceof Error)
      return res.status(400).json(error.message);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      return res.status(200).json({ msg: "teste" });
    } catch (error) {
        if(error instanceof Error)
      return res.status(400).json(error.message);
    }
  },
};

export{scaleController}