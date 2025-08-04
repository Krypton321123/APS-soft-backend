import multer from 'multer'; 
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';




const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const partyImagesDest = multer.diskStorage({
    destination: (req, file, cb) => {
        const empId = req.body.userId; 
        const partyId = req.body.partyId
        console.log(req.body.partyId)
        const date = new Date(Date.now())
        // const date = new Date(Date.now()); 
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const dateStr = `${day}-${month}-${year}`

       const fullPath = path.join('./', 'uploads', `party_images`, `${empId}`, `${partyId}-${dateStr}`)

       if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, {recursive: true});
       }

        cb(null, fullPath)
    }, filename: (req, file, cb) => {
        const date = new Date(Date.now())
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const randomId = Math.random().toString(36).substring(2, 15);
        const ext = path.extname(file.originalname)
        const filename = `${randomId}-${hours}-${minutes}-${seconds}${ext}`
        
        cb(null, filename)
    }
}) 

export const partyImageUpload = multer({storage: partyImagesDest})
