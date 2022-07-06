import { prisma } from "../prisma";
import { IUser } from "../interfaces/IUser";

import bcrypt from "bcrypt";
import { UploadStream } from "cloudinary";

const userService = {
  async findAllUsers() {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        login: true,
        status: true,
        password: false,
        createdAt: true,
        updatedAt: true,
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
  async findById(id: string) {
    const user = prisma.user.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        login: true,
        status: true,
        password: false,
        createdAt: true,
        updatedAt: true,
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
    if (!user) throw { msg: `erro na busca!` };
    return user;
  },
  async create(body: IUser) {
    const data = {
      login: body.login,
      password: bcrypt.hashSync(body.password, 10),
      status: true,
      member_id: body.member_id,
    };
    const user = await prisma.user.create({
      data,
    });

    if (!user) throw new Error("Error with create user");
    return user;
  },
  async update(body: IUser) {
    const { id, login, password, status } = body;
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    });
    if (!user) throw new Error("Error with id user");
    const data = {
      login: login ? login : user?.login,
      password: password ? bcrypt.hashSync(password, 10) : user?.password,
      status: status ? status : user?.status,
    };
    const userUpdate = prisma.user.update({
      where: {
        id,
      },
      data,
    });
    if (!userUpdate) throw new Error("Error with update user");
    return userUpdate;
  },
  async delete(id:string) {
    const user = await prisma.user.delete({where:{id}})
    if (!user) throw new Error("Error with Deletar user");
    return user;
  },
};
export { userService };
