/**
 * Servidor de desenvolvimento Next.js com proxy apenas de leitura para activos persistentes.
 * Em produção, o caminho /manus-storage é resolvido pela infraestrutura de alojamento.
 */
import { createServer } from "node:http";

process.env.NODE_ENV = "development";

const { default: next } = await import("next");
const hostname = "0.0.0.0";
const port = Number(process.env.PORT || 3000);
const app = next({ dev: true, hostname, port });
const handle = app.getRequestHandler();

console.log(`- Local:        http://localhost:${port}`);
console.log(`- Network:      http://${hostname}:${port}`);
console.log("✓ Starting...");

await app.prepare();

createServer(async (request, response) => {
  if (request.url?.startsWith("/manus-storage/")) {
    const key = decodeURIComponent(request.url.replace(/^\/manus-storage\//, "").split("?")[0]);
    const forgeBaseUrl = (process.env.BUILT_IN_FORGE_API_URL || "").replace(/\/+$/, "");
    const forgeKey = process.env.BUILT_IN_FORGE_API_KEY;

    if (!key || !forgeBaseUrl || !forgeKey) {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.end("Storage proxy not configured");
      return;
    }

    try {
      const forgeUrl = new URL("v1/storage/presign/get", `${forgeBaseUrl}/`);
      forgeUrl.searchParams.set("path", key);
      const forgeResponse = await fetch(forgeUrl, {
        headers: { Authorization: `Bearer ${forgeKey}` },
      });

      if (!forgeResponse.ok) {
        response.writeHead(502, { "Content-Type": "text/plain" });
        response.end("Storage backend error");
        return;
      }

      const payload = await forgeResponse.json();
      if (!payload.url) throw new Error("Empty signed URL");
      response.writeHead(307, { Location: payload.url, "Cache-Control": "no-store" });
      response.end();
      return;
    } catch {
      response.writeHead(502, { "Content-Type": "text/plain" });
      response.end("Storage proxy error");
      return;
    }
  }

  await handle(request, response);
}).listen(port, hostname, () => {
  console.log("✓ Ready");
});
