import { prisma } from "../src/prisma";

const posts = [ {
  title: "Recepição",
  initials: "RCP-1",
  description:
    "Local onde Os irmão chega para ser conduzido de forma organizada e estratégica ao templo.",

},
{
  title: "Estacionamento",
  initials: "ETC-1",
  description:
    "Responsável em alocar os carros no estacinamento e manter a contagem do subsolo.",
},]

async function main() {
 for (const data of posts) {
   const {id}=await prisma.post.create({
    data
  });
  console.log(id)
  await prisma.task.create({
    data:{
      task:"Deve cuidar do estacionamento 2 e dar apoio para que esta cuidando do terreno",
      post_id:id
    }
  })
 }
 
}

main();

