import dotenv from 'dotenv'
import app from './app.js';
dotenv.config()

const start = async () => {
    const PORT = process.env.PORT || 8000; 
    const displayUrl = `http://localhost:${PORT}/api`

    app.listen(PORT, () => {
        console.log(`API listening on ${displayUrl}`)
    })
}   

start().catch((err) => {
    console.log("error in starting api: ", err)
}); 
