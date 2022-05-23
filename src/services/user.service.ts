import { prisma } from "../prisma";
import { IUser } from "../interfaces/IUser";
import { IUsers } from "../interfaces/IUser";
import bcrypt from "bcrypt";

const userService = {
  async findAllUsers (){
    const users = await prisma.user.findMany({
      select: {
        id:true,
        login:true,
        status:true,
        password: false,
        createdAt:true,
        updatedAt:true,
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
  async findById(id:string){
    const user = prisma.user.findFirst({
      where:{
        id
      },
      select:{
        id:true,
        login:true,
        status:true,
        password: false,
        createdAt:true,
        updatedAt:true,
        members: {
          select: {
            id: true,
            name: true,
            email: true,
            tephone: true,
            status: true,
          },
        },
      }
    })
  },
 async create(body: IUser){
    const data = {
      ...body,
      password: bcrypt.hashSync(body.password, 10),
    };
    const user = await prisma.user.create({
      data,
    });
    if (!user) throw new Error("Error with create user");
    return user;
  },
};

export { userService };
