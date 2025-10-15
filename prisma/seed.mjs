import { PrismaClient } from "./generated/index.js";
import fs from 'fs'; 
import path from 'path'

const prisma = new PrismaClient();

const pull = async () => {
  const locationData = await prisma.employeeRouteMap.findMany({
    where: {
      route_id: 'cmgooylwk015rorxoech3e4hb'
    },
    include: {
      routeArr: true
    }
  });


  console.log(locationData[0].routeArr.map((item) => {
    console.log(item); 
  }))
}

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

const edit = async () => {
  const partyImages = await prisma.partyImages.findMany({}); 

  await Promise.all(
    partyImages.map(async (item) => {
      let profileImage = item.profileImageUrl; 
      if (profileImage.startsWith("/../")) {
        profileImage = profileImage.replaceAll("/..", ""); 
      }

      await prisma.partyImages.update({
        where: {
          image_id: item.image_id
        }, 
        data: {
          profileImageUrl: profileImage
        }
      })
    })
  )

  console.log("Its done"); 
}

const fixImage = async () => {

  const startDate = new Date('08-05-2025')
  startDate.setHours(0,0,0,0)
  const endDate = new Date('08-20-2025'); 
  endDate.setHours(23,59,59,999)

  const images = await prisma.partyImages.findMany({
    where: {
      AND: [
        {createdAt: {gte: startDate}}, 
        {createdAt: {lte: endDate}}
      ]
    }
  }); 


  await Promise.all(
    images.map(async (item, index) => {
      let profileImage = item.profileImageUrl
      const indexOfYear = profileImage.indexOf("2025") + 4; 
     
      if (!(profileImage[indexOfYear] === "/")) {
        profileImage = `${profileImage.slice(0, indexOfYear)}/${profileImage.slice(indexOfYear)}`

        await prisma.partyImages.update({
          where: {
            image_id: item.image_id
          }, 
          data: {
            profileImageUrl: profileImage
          }
        })
      }
    })
  )
}


pull().catch((err) => console.error("error: ", err)); 