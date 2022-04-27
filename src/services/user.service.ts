import { prisma } from "../prisma";
import { IUser } from "../interfaces/IUser";
import { IUsers } from "../interfaces/IUser";

const userService = {
  findAllUser: async () => {
    const users = await prisma.user.findMany({
      include: {
        members: {
          select: {
            id: true,
            name: true,
            email: true,
            tephone: true,
            status: true,
          },
        },
      },
    });
    if (!users) throw { msg: `erro na busca!` };
    return users;
  },
};

export { userService };
