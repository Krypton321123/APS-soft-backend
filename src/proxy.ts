import https from "https";
import fs from "fs";
import httpProxy from "http-proxy";
import { IncomingMessage, ServerResponse } from "http";
import dotenv from "dotenv"
dotenv.config(); 

const proxy = httpProxy.createProxyServer({
  target: `http://localhost:${process.env.PORT}`,
  changeOrigin: true,
});

const options = {
  key: fs.readFileSync("E:/Mobile-app-backend/api.saavlioils.com-key.pem"),
  cert: fs.readFileSync("E:/Mobile-app-backend/api.saavlioils.com-chain.pem"),
} as https.ServerOptions;

https
  .createServer(options, (req: IncomingMessage, res: ServerResponse) => {
    // @ts-ignore
    proxy.web(req, res, (err) => {
      console.error("Proxy error:", err);
      res.writeHead(500);
      res.end("Something went wrong.");
    });
  })
  .listen(443, () => {
    console.log("🚀 HTTPS Proxy running on port 443");
  });
