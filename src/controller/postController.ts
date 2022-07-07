import { Request, Response } from "express";
import { postService } from "../services/post.service";

const postController = {
  index: async (req: Request, res: Response) => {
    try {
      const post = await postService.findAllPosts();
      return res.status(200).json(post);
    } catch (error) {
      if (error instanceof Error)
       return res.status(400).json(error.message);
     
    }
  },
  show: async (req: Request, res: Response) => {
    try {
      const post = await postService.findById(req.params.id);
      return res.status(200).json(post);
    } catch (error) {
      if (error instanceof Error)
       return res.status(400).json(error.message);
      
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const post = await postService.create(req.body)
      return res.status(201).json(post);
    } catch (error) {
      if (error instanceof Error)
      return res.status(401).json(error.message);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const post = await postService.update(req.body)
      return res.status(200).json(post);
    } catch (error) {
      if (error instanceof Error)
      return res.status(400).json(error.message);
      
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const post = await postService.delete(req.body.id)
      return res.status(200).json(post);
    } catch (error) {
      if (error instanceof Error)
      return res.status(400).json(error.message);
      
    }
  },

};

export { postController };
