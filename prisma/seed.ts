import { prisma } from "@/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Julia Souza",
        email: "julia@gmail.com",
      },
      {
        name: "Diego Fernandes",
        email: "diego@gmail.com",
      },
    ],
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
