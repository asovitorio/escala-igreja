import { prisma } from "../prisma";
import { ISchedule } from "../interfaces/ISchedule";

const scheduleService = {
  async index() {
    const schedules = await prisma.schedule.findMany({
      select: {
        id: true,
        data: true,
        note: true,
        member: {
          select: {
            id: true,
            name: true,
            email: true,
            tephone: true,
            status: true,
            file: {
              select: {
                id: true,
                path: true,
              },
            },
          },
        },
        post: {
          select: {
            id: true,
            title: true,
            initials: true,
            description: true,
          },
        },
      },
    });
    if(!schedules) throw new Error("error in search!");
    return schedules
    
  },
  async create(body: ISchedule) {
    const schedule = await prisma.schedule.create({
      data: {
        data: body.data, //"YYYY-MM-DDTHH:MM:SS.MMMZ"
        note: body.note,
        member_id: body.member_id,
        post_id: body.post_id,
        assignedBy: body.assignedBy,
      },
    });

    return schedule;
  },
};

export { scheduleService };