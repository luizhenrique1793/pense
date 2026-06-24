import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { existsSync, statSync } from 'node:fs'
import { extname, join, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const port = 8080
const host = '127.0.0.1'
const dirname = fileURLToPath(new URL('.', import.meta.url))
const root = join(dirname, '.output', 'public')
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
}

function safePath(pathname) {
  const decoded = decodeURIComponent(pathname.split('?')[0])
  const clean = normalize(decoded === '/' ? '/index.html' : decoded).replace(/^(\.\.[/\\])+/, '')
  return join(root, clean)
}

async function send(response, file) {
  const data = await readFile(file)
  response.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' })
  response.end(data)
}

createServer(async (request, response) => {
  try {
    const requested = safePath(request.url || '/')
    const file = existsSync(requested)
      ? statSync(requested).isDirectory()
        ? join(requested, 'index.html')
        : requested
      : join(root, 'index.html')
    await send(response, file)
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end('Not found')
  }
}).listen(port, host, () => {
  console.log(`Pense preview: http://${host}:${port}/`)
})
