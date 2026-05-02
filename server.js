import { createServer } from "node:http";
import { parse } from "node:url";
import next from "next";

const hostname = "0.0.0.0";
const port = Number.parseInt(process.env.PORT || "3000", 10);
const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();

console.log(`HOST=${hostname}`);
console.log(`PORT=${port}`);

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url || "/", true);
    if ((req.method === "GET" || req.method === "HEAD") && parsedUrl.pathname === "/health") {
      res.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8" });
      res.end(req.method === "HEAD" ? undefined : "ok");
      return;
    }

    handle(req, res, parsedUrl);
  }).listen(port, hostname, () => {
    console.log(`Server ready on http://${hostname}:${port}`);
  });
});
