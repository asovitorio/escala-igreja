import { prisma } from "../prisma";
import { ISchedule } from "../interfaces/ISchedule";

const scheduleService = {
  async index() {
    const schedules = await prisma.schedule.findMany({
      select: {
        id: true,
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
  async findById(id:string) {
    const schedules = await prisma.schedule.findFirst({
      where:{
        id
      },
      select: {
        id: true,
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
            task:{
              select:{
                id:true,
                task:true,

              }
            }
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
        //"YYYY-MM-DDTHH:MM:SS.MMMZ"
        note: body.note,
        member_id: body.member_id,
        post_id: body.post_id,
        scale_id:body.scale_id,
        assignedBy: body.assignedBy,
      },
    });

    return schedule;
  },
  async update(body: ISchedule) {
    const schedule = await prisma.schedule.create({
      data: {
        //"YYYY-MM-DDTHH:MM:SS.MMMZ"
        id:body.id,
        note: body.note,
        member_id: body.member_id,
        post_id: body.post_id,
        scale_id:body.scale_id,
        assignedBy: body.assignedBy,
      },
    });

    return schedule;
  },
};

export { scheduleService };
