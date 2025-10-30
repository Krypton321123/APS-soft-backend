import { PrismaClient } from "./generated/index.js";
import fs from 'fs'; 
import path from 'path'
import crypto from 'crypto'
import axios from 'axios'

const prisma = new PrismaClient();

const pull = async () => {
  const mobileNumbers = await prisma.mstparty.findMany({
    select: {
      mobile: true 
    }
  })


  console.log(mobileNumbers)
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

const generateRandomOTP = (start, end) => {
    const otp = crypto.randomInt(start, end); 
    return otp; 
}

const sendOTP = async ( mobileNumber, amount, customer, caller ) => {

    console.log(mobileNumber, amount, customer)
    const otp = generateRandomOTP(10000, 999999); 

    const finalMessage = `Dear%20${customer},%0A${otp}%20:%20Use%20this%20OTP%20to%20confirm%20your%20delivery%20with%20bill%20number%20${amount}%20%0A%0ARegards%20SAAVLI%20FAMILY%0AMahesh%20Edible%20Oil%20Products%20PVT%20LTD`

    try {
        const response = await axios.get(`https://cloud.smsindiahub.in/api/mt/SendSMS?APIKey=${process.env.SMS_API_KEY}&senderid=MEOPPL&channel=Trans&DCS=0&flashsms=0&number=${mobileNumber}&text=${finalMessage}&DLTTemplateId=1007190227086237640&route=0&PEId=1001305053689820308`)

        console.log(response)
    } catch (err) {
        console.log("error generating otp", err); 
        return null
    }
}


sendOTP('8445591780', "2000", "Raj Sharma"); 