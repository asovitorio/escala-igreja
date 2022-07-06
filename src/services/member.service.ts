import { prisma } from "../prisma";
import { IMember } from "../interfaces/IMembers";
import  fs from "fs";
const memberService = {
  findAllMembers: async () => {
    const members = await prisma.member.findMany({
      include: {
        user: {
          select: {
            id: true,
            login: true,
            status: true,
          },
        },
        file: {
          select: {
            path: true,
          },
        },
      },
    });
    if (!members) throw new Error("Member inexistent!");
    return members;
  },
  findById: async (id: string) => {
    if (!id) throw new Error("Id inexisted");
    const member = await prisma.member.findUnique({
      where: {
        id,
      },
      include: {
        user: {
          select: {
            id: true,
            login: true,
            status: true,
          },
        },
        file: {
          select: {
            path: true,
          },
        },
      },
    });
    if (!member) throw new Error("search inexists!");
    return member;
  },
  create: async (body: IMember) => {
    if (Object.keys(body).length < 3)
      throw new Error("Impossible Cadastrar! verify the data");

    const memberIfNotExists = await prisma.member.findFirst({
      where: {
        email: body.email,
      },
    });
    if (memberIfNotExists) throw new Error("Member already exist!");
    const member = await prisma.member.create({
      data: {
        name: body.name,
        email: body.email,
        tephone: body.telephone,
        file: {
          create: {
            path: body.path,
          },
        },
      },
    });
    if (!member) throw new Error("Error registering members!");
    
    return member;
  },
  update: async function (body: IMember) {
    console.log(body.status);
    const member = await this.findById(String(body.id));
    const response = await prisma.member.update({
      where: {
        id: body.id,
      },
      data: {
        name: body.name ? body.name : member.name,
        email: body.email ? body.email : member.email,
        tephone: body.telephone ? body.telephone : member.tephone,
        status: body.status,
        file: {
          update: {
            path: body.path ? body.path : member.file.path,
          },
        },
      },
    });
    if (!response) throw new Error("Error in updating members!");
    return response;
  },
  delete: async function (id: string) {
    const member = await this.findById(id);
    const memberDelete = await prisma.member.delete({
      where: {
        id,
      },
    });
    const fileDelete = await prisma.file.delete({
      where: {
        id: member.file_id,
      },
    });
    return { memberDelete,fileDelete };
  },
};
export { memberService };
