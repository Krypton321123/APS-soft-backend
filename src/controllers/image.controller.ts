import { Request, Response } from 'express';
import prisma from '../util/prisma.js';
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

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