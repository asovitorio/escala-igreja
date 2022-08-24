import { IScale } from "../interfaces/IScale";
import { prisma } from "../prisma";

const scaleService = {
  async index() {
    const scales = await prisma.scale.findMany({
      select: {
        id:true,
        data: true,
        event: true,
        createdAt: true,
      },
    });
    if (!scales) throw new Error("search impossible!");
    return scales;
  },
  async findById(id: string) {
    const scales = await prisma.scale.findFirst({
      where: { id },
      select: {
        id:true,
        data: true,
        event: true,
        createdAt: true,
        schedule: {
          select: {
            member: {
              select: {
                id:true,
                name: true,
                file: {
                  select: {
                    path: true,
                  },
                },
              },
            },
            post:{
              select:{
                id:true,
                title:true,
                initials:true
              }
            }
          },
        },
      },
    });
    if (!scales) throw new Error("search impossible!");
    return scales;
  },
  async create(data: IScale) {
    const scale = await prisma.scale.create({
      data,
    });
    if (!scale) throw new Error("unable save register!");
    return scale;
  },
};

export { scaleService };
