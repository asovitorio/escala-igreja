import { Request, Response } from "express";
import { postService } from "../services/post.service";

const postController = {
  index: async (req: Request, res: Response) => {
    try {
      const post = await postService.findAllPosts();
      return res.status(200).json(post);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  show: async (req: Request, res: Response) => {
    try {
      const post = await postService.findById(req.params.id);
      return res.status(200).json(post);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const post = await postService.create(req.body)
      return res.status(200).json(post);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};

export { postController };
