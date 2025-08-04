var _a;
import { PrismaClient } from "../../prisma/generated/client.js";
const prisma = (_a = global.prisma) !== null && _a !== void 0 ? _a : new PrismaClient({
    log: ['warn', 'error'], // or 'query' for debugging
});
if (process.env.NODE_ENV !== 'production')
    global.prisma = prisma;
export default prisma;
