import dotenv from 'dotenv'
import app from './app.js';
dotenv.config()

const start = async () => {
    const PORT = process.env.PORT || 8000; 
    console.log(PORT)
    const displayUrl = `http://localhost:${PORT}/api`

    app.listen(Number(PORT), '0.0.0.0', () => {
        console.log(`API listening on ${displayUrl}`)
    })
}   

start().catch((err) => {
    console.log("error in starting api: ", err)
}); 
