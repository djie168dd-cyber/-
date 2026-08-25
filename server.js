const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 8080);
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

// 静态资源缓存配置
const cacheConfig = {
  // HTML 文件不缓存，确保更新即时生效
  ".html": "no-cache",
  // CSS/JS 缓存 7 天
  ".css": "public, max-age=604800",
  ".js": "public, max-age=604800",
  // 图片/PDF 缓存 30 天
  ".png": "public, max-age=2592000",
  ".jpg": "public, max-age=2592000",
  ".jpeg": "public, max-age=2592000",
  ".webp": "public, max-age=2592000",
  ".svg": "public, max-age=2592000",
  ".ico": "public, max-age=2592000",
  ".pdf": "public, max-age=2592000"
};

const server = http.createServer((req, res) => {
  const requestPath = decodeURIComponent((req.url || "/").split("?")[0]);
  const relativePath = requestPath === "/" ? "index.html" : requestPath.replace(/^\/+/, "");
  const filePath = path.resolve(root, relativePath);

  if (!filePath.startsWith(root + path.sep) && filePath !== root) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("Forbidden");
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      const status = error.code === "ENOENT" ? 404 : 500;
      res.writeHead(status, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end(status === 404 ? "Not found" : "Server error");
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
      "Cache-Control": cacheConfig[ext] || "no-cache"
    });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`邓洁产品经理作品集已启动：http://localhost:${port}`);
  console.log("按 Ctrl + C 可停止服务。");
});
