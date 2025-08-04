import { PrismaClient } from "./generated/index.js";

const prisma = new PrismaClient();

const create = async () => {
  const today = new Date(Date.now());
  const start = new Date(today.setHours(0,0,0,0))
  const end = new Date(today.setHours(23,59,59,999));  
  console.log(start.toISOString()); 
  const partyImages = await prisma.partyImages.findMany({
    where: {
      AND: [
        {createdAt: {gte: start.toISOString()}}, 
        {createdAt: {lte: end.toISOString()}}
      ]
    }
  })
  console.log(partyImages)
};

create();