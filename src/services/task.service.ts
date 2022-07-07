import { prisma } from "../prisma";
interface ITask {
  id:string;
  task:string;
  post_id:string;
}
const taskService = {
  async findAlltasks () {
    const tasks = await prisma.task.findMany({
      include: {
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
    if (!tasks) throw new Error("Busca impossivel!");
    return tasks;
  },
 async findById (id: string)  {
    const task = await prisma.task.findFirst({
      where: {
        id,
      },
      select:{
        id:true,
        task:true,
        post:{
          select:{
            id:true,
            title:true,
            initials:true
          }
        }
      }
    });
    if (!task) throw new Error(" Search task impossible!");
    return task;
  },
  async create(data: ITask) {
   
    const task = await prisma.task.create({
      data
    });
   
    if (!task) throw new Error("unable to save record!");
    return task;
  },
async  update(body: ITask){

    if(!body.id) throw new Error("unable to indentify the id");

    const task = await this.findById(body.id)
    if(!task) throw new Error("Search task impossible!");
    
    const data = {
      task:body.task?body.task:task.task
    }
   
    const update = await prisma.task.update({
      where:{
        id:body.id
      },
      data
    });
   
    if (!update) throw new Error("unable to save record!");
    return update;
  },
  async  delete(id: string){

    if(!id) throw new Error("unable to indentify the id");
    
    const task = await prisma.task.delete({
      where:{
        id
      }
    })
    return task
  }
};
export { taskService };
