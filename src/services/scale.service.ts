import { IScale } from "../interfaces/IScale";
import { prisma } from "../prisma";

const scaleService = {
  async create(data: IScale) {
    const scale = await prisma.scale.create({
      data,
    });
    if (!scale) throw new Error("unable save register!");
    return scale;
  },
};

export { scaleService };
