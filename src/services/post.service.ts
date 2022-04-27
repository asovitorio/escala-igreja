import { prisma } from "../prisma";

const postService = {
  findAllPosts: async () => {
   
      const posts = await prisma.post.findMany({
        include:{
          task:{
            select:{
              id:true,
              task:true
            }
          }
        }
      })
      if(!posts) throw new Error("Busca impossivel!")
      return posts;
  },
};
export {postService};
