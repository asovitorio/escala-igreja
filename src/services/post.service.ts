import { create } from "domain";
import { prisma } from "../prisma";
interface IPost {
  id: string;
  title: string;
  description: string;
  initials: string;
}
const postService = {
  findAllPosts: async () => {
    const posts = await prisma.post.findMany({
      include: {
        task: {
          select: {
            id: true,
            task: true,
          },
        },
      },
    });
    if (!posts) throw new Error("Busca impossivel!");
    return posts;
  },
  async findById(id: string) {
    const post = await prisma.post.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        description: true,
        initials: true,
        task: {
          select: {
            id: true,
            task: true,
          },
        },
      },
    });
    if (!post) throw new Error("Busca impossivel!");
    return post
  },
  async create(data:IPost){
    const post = await prisma.post.create({
      data
    })
    if(!post) throw new Error("unable to save record!");
    
    return post
  }
};
export { postService };
