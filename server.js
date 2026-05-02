import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "node:url";
import next from "next";

const hostname = process.env.HOSTNAME || "0.0.0.0";
const port = Number.parseInt(process.env.PORT || "3000", 10);
const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();
const rootDir = path.dirname(fileURLToPath(import.meta.url));

const mimeTypes = {
  ".css": "text/css; charset=UTF-8",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".json": "application/json; charset=UTF-8",
  ".js": "application/javascript; charset=UTF-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=UTF-8",
  ".ttf": "font/ttf",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
};

function resolveStaticPath(pathname) {
  if (pathname.startsWith("/_next/static/")) {
    const baseDir = path.join(rootDir, ".next", "static");
    const filePath = path.resolve(baseDir, pathname.replace("/_next/static/", ""));
    return filePath.startsWith(baseDir + path.sep) ? filePath : null;
  }

  if (pathname.startsWith("/images/")) {
    const baseDir = path.join(rootDir, "public", "images");
    const filePath = path.resolve(baseDir, pathname.replace("/images/", ""));
    return filePath.startsWith(baseDir + path.sep) ? filePath : null;
  }

  if (pathname === "/robots.txt" || pathname === "/sitemap.xml") {
    return path.join(rootDir, "public", pathname);
  }

  return null;
}

function serveStatic(req, res, pathname) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    return false;
  }

  const filePath = resolveStaticPath(pathname);
  if (!filePath || !existsSync(filePath)) {
    return false;
  }

  const fileStat = statSync(filePath);
  if (!fileStat.isFile()) {
    return false;
  }

  const contentType = mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream";
  res.writeHead(200, {
    "Content-Length": fileStat.size,
    "Content-Type": contentType,
    "Cache-Control": pathname.startsWith("/_next/static/")
      ? "public, max-age=31536000, immutable"
      : "public, max-age=3600",
  });

  if (req.method === "HEAD") {
    res.end();
    return true;
  }

  const stream = createReadStream(filePath);
  stream.on("error", () => {
    if (!res.headersSent) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=UTF-8" });
    }
    res.end("Failed to read static asset");
  });
  stream.pipe(res);
  return true;
}

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url || "/", true);
    if (serveStatic(req, res, parsedUrl.pathname || "/")) {
      return;
    }

    handle(req, res, parsedUrl);
  }).listen(port, hostname, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
