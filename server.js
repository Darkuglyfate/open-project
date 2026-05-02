import { createServer } from "node:http";
import { parse } from "node:url";
import next from "next";

const host = "0.0.0.0";
const port = Number.parseInt(process.env.PORT || "3000", 10);
const app = next({ dev: false });
const handle = app.getRequestHandler();

let nextReady = false;
let prepareError = null;

const log = (...args) => {
  console.log(...args);
  console.error(...args);
};

process.on("uncaughtException", (error) => {
  console.error("uncaughtException", error);
});

process.on("unhandledRejection", (error) => {
  console.error("unhandledRejection", error);
});

const server = createServer((req, res) => {
  const parsedUrl = parse(req.url || "/", true);
  const pathname = parsedUrl.pathname || "/";

  if ((req.method === "GET" || req.method === "HEAD") && pathname === "/health") {
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=UTF-8",
      "Cache-Control": "no-store",
    });
    res.end(req.method === "HEAD" ? undefined : "ok");
    return;
  }

  if ((req.method === "GET" || req.method === "HEAD") && pathname === "/__debug") {
    res.writeHead(200, {
      "Content-Type": "application/json; charset=UTF-8",
      "Cache-Control": "no-store",
    });
    res.end(
      req.method === "HEAD"
        ? undefined
        : JSON.stringify({
            ok: true,
            nextReady,
            prepareError,
            host,
            port,
            nodeEnv: process.env.NODE_ENV,
          })
    );
    return;
  }

  if (!nextReady) {
    res.writeHead(503, {
      "Content-Type": "text/plain; charset=UTF-8",
      "Cache-Control": "no-store",
    });
    res.end("Next.js is starting");
    return;
  }

  handle(req, res, parsedUrl).catch((error) => {
    console.error("request handler error", error);
    if (!res.headersSent) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=UTF-8" });
    }
    res.end("Internal server error");
  });
});

server.on("error", (error) => {
  console.error("server.listen error", error);
  process.exitCode = 1;
});

server.listen(port, host, () => {
  log("Starting ARTALYANS server");
  log("HOST=", host);
  log("PORT=", port);
  log(`HTTP server ready on http://${host}:${port}`);

  app
    .prepare()
    .then(() => {
      nextReady = true;
      log("Next.js ready");
    })
    .catch((error) => {
      prepareError = error?.stack || String(error);
      console.error("Next.js prepare failed", error);
    });
});
