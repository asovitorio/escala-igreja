import { Request, Response } from "express";
import { memberService } from "../services/member.service";
import {
  generatePublicUrl,
  uploadFile,
  deleteFileGoogle,
} from "../uploads/google";

const membersController = {
  index: async (req: Request, res: Response) => {
    try {
      const members = await memberService.findAllMembers();
      return res.status(200).json(members);
    } catch (error) {
      if (error instanceof Error) return res.status(400).json(error.message);
    }
  },
  showById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const member = await memberService.findById(id);
      return res.status(200).json(member);
    } catch (error) {
      if (error instanceof Error) return res.status(400).json(error.message);
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const file = {
        fieldname: req.file?.fieldname,
        originalname: req.file?.originalname,
        encoding: req.file?.encoding,
        mimetype: req.file?.mimetype,
        destination: req.file?.destination,
        filename: req.file?.filename,
        path: req.file?.path,
        size: req.file?.size,
      };
      const fileId = await uploadFile(file);
      const avatarLink = await generatePublicUrl(String(fileId));

      const body = {
        ...req.body,
        path: avatarLink,
        status: true,
        id_file_google: fileId,
      };

      const member = await memberService.create(body);

      return res.status(201).json(member);
    } catch (error) {
      if (error instanceof Error) return res.status(401).json(error.message);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const member = await memberService.update(req.body);
      return res.status(200).json(member);
    } catch (error) {
      if (error instanceof Error) return res.status(400).json(error.message);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const member = await memberService.delete(req.body.id);
      await deleteFileGoogle(String(member.memberDelete.id_file_google));
      return res.status(200).json(member);
    } catch (error) {
      if (error instanceof Error) return res.status(400).json(error.message);
    }
  },
};

export { membersController };
