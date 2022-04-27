import { Request, Response } from "express";
import { postService } from "../services/post.service";

const postController = {
  index: async (req: Request, res: Response) => {
    try {
      const post = await postService.findAllPosts();
      return res.status(200).json(post);
    } catch (error) {
      return res.status(200).json(error);
    }
  },
};

export { postController };
