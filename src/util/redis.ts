import "dotenv/config"
import { Redis } from 'ioredis'

const url = process.env.REDIS_URL
if (!url) throw new Error('REDIS_URL is not set')

const redisClient = new Redis(url)

redisClient.on('error', (err) => {
    console.error('Redis error:', err.message)
})

export default redisClient