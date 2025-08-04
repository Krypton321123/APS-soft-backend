var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import dotenv from 'dotenv';
import app from './app.js';
dotenv.config();
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    const PORT = process.env.PORT || 8000;
    const displayUrl = `http://localhost:${PORT}/api`;
    app.listen(PORT, () => {
        console.log(`API listening on ${displayUrl}`);
    });
});
start().catch((err) => {
    console.log("error in starting api: ", err);
});
