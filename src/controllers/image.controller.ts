import { Request, Response } from 'express';
import prisma from '../util/prisma.js';
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import asyncHandler from '../util/asyncHandler.js';
import ApiResponse from '../util/ApiResponse.js';
import ip from 'ip'

const __fileName = fileURLToPath(import.meta.url)
const __dirname = dirname(__fileName)

export const getDepots = async (req: Request, res: Response) => {
  try {
    const depots = await prisma.user.findMany({
      select: { untnm: true },
      distinct: ['untnm']
    });
    res.json(depots.map((d: { untnm: string }) => d.untnm).filter(Boolean));
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch depots' });
  }
};

export const getEmployees = async (req: Request, res: Response) => {
  const { depot } = req.query;
  if (!depot) return res.status(400).json({ error: 'Depot parameter required' });
  
  try {
    const employees = await prisma.user.findMany({
      where: { untnm: depot as string },
      select: { usrnm: true }
    });
    res.json(employees.map((e: { usrnm: string }) => e.usrnm).filter(Boolean));
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
};

export const searchImages = async (req: Request, res: Response) => {
  const { depot, employee, startDate, endDate } = req.query;

  try {
    const user = await prisma.user.findFirst({
      where: {
        untnm: depot as string,
        usrnm: employee as string
      },
      select: { username: true }
    });

    if (!user) return res.json([]);

    const images = await prisma.partyImages.findMany({
      where: {
        userId: user.username,
        createdAt: {
          gte: startDate ? new Date(startDate as string) : undefined,
          lte: endDate ? new Date(endDate as string) : undefined
        }
      },
      select: {
        profileImageUrl: true,

      }
    });

    const convertToBase64 = (relativePath: string | null) => {
      console.log(__dirname)
      if (!relativePath) return null;
      const fullPath = path.join( __dirname, '..', '..',relativePath); 
      console.log(fullPath)
      if (fs.existsSync(fullPath)) {
        const imageBuffer = fs.readFileSync(fullPath);
        return `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;
      }
      return null;
    };

    const allImages = images.map(img => {
      return convertToBase64(img.profileImageUrl)
    });

    res.json(allImages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to search images' });
  }
};

export const getImages = asyncHandler(async (req: Request, res: Response) => {
  const { depot, employee, startDate, endDate } = req.query

  let ipAdd = ip.address(); 
  if (process.env.PRODUCTION_MODE === "prod") ipAdd = "157.15.93.224"

   const user = await prisma.user.findFirst({
      where: {
        untnm: depot as string,
        usrnm: employee as string
      },
      select: { username: true }
    });

    if (!user) return res.json([]);

    const images = await prisma.partyImages.findMany({
      where: {
        userId: user.username,
        createdAt: {
          gte: startDate ? new Date(startDate as string) : undefined,
          lte: endDate ? new Date(endDate as string) : undefined
        }
      },
      select: {
        profileImageUrl: true,
        createdAt: true,
        partyId: true
      }
    });

    let totalOutstanding = 0; 
    let totalCollectionAmt = 0; 
    let totalOrderQuantity = 0; 

    let sendData = await Promise.all(
      images.map(async (item, index) => {
        const startDate = new Date(item.createdAt)
        startDate.setUTCHours(0, 0, 0, 0); 
        const endDate = new Date(startDate); 
        endDate.setUTCHours(23, 59, 59, 999); 


        const order = await prisma.order.findFirst({
          where: {
            AND: [
              {createdAt: {gte: startDate}}, 
              {createdAt: {lte: endDate}}
            ], 
            empId: user.username, 
            partyId: item.partyId
          }, 
          select: {
            orderItems: true
          }
        })

        const collection = await prisma.collection.findFirst({
          where: {
            AND: [
              {createdAt: {gte: startDate}}, 
              {createdAt: {lte: endDate}}
            ], 
            empId: user.username, 
            partyId: item.partyId
          }, 
          select: {
            amount: true
          }
        })

        const party = await prisma.mstparty.findFirst({
          where: {
            ledcd: item.partyId
          }, 
          select: {
            lednm: true, outs: true 
          }
        })

        
        const orderQuantity = order?.orderItems.map((item) => item.quantity).reduce((acc, curr) => acc + curr, 0); 

        const imageString = `http://${ipAdd}:${process.env.PORT}${item.profileImageUrl.split('uploads')[1]}`
        
        totalOutstanding += Number(party?.outs)|| 0; 
        totalCollectionAmt += Number(collection?.amount) || 0; 
        totalOrderQuantity += Number(orderQuantity) || 0; 

        return {
          ...item, outstanding: party?.outs || 0, partyName: party?.lednm, profileImageUrl: imageString, orderQuantity: orderQuantity || 0, collectionAmount: collection?.amount || 0 
        }
      })
    )


    return res.status(200).json(new ApiResponse(200, "fetched", {sendData, total: {totalOutstanding, totalOrderQuantity, totalCollectionAmt}}))

})