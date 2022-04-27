import { prisma } from "../prisma";
import { IMember } from "../interfaces/IMembers";
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
      throw new Error("Impossivel Cadastrar! verifique os dados");

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
    if (!member) throw new Error("Erro ao cadastrar o membro!");
    return member;
  },
};
export { memberService };
