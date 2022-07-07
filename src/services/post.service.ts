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
    return post;
  },
  async create(data: IPost) {
    const post = await prisma.post.create({
      data,
    });
    if (!post) throw new Error("unable to save record!");

    return post;
  },
  async update(body: IPost) {
    if (!body.id) throw new Error("unable to indentify the id");

    const post = await this.findById(body.id);
    const data = {
      title: body.title ? body.title : post.title,
      description: body.description ? body.description : post.description,
      initials: body.initials ? body.initials : post.initials,
    };

    if (!post) throw new Error(" Search Post impossible!");

    const update = await prisma.post.update({
      where: {
        id: body.id,
      },
      data,
    });
    if (!update) throw new Error("unable to update record!");

    return update;
  },
  async delete(id: string) {
   
    if (!id) throw new Error("unable to indentify the id");
    const post = await prisma.post.delete({
      where: {
        id,
      },
    });
    if (!post) throw new Error("unable to delete post!");
    return post;
  },
};
export { postService };
