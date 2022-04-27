import { prisma } from "../prisma";

const taskService = {
  findAlltasks: async () => {
    const tasks = await prisma.task.findMany({
      include: {
        post: {
          select: {
            id: true,
            title: true,
            initials: true,
            description:true
            
          },
        },
      },
    });
    if (!tasks) throw new Error("Busca impossivel!");
    return tasks;
  },
};
export { taskService };
