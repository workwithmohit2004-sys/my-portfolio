import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { processSendEmail } from './server/emailHandler.js';

// Dev middleware plugin to handle /api/send-email locally during `npm run dev`
function devEmailApiPlugin() {
  return {
    name: 'dev-email-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/send-email' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const payload = JSON.parse(body || '{}');
              const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';
              const result = await processSendEmail(payload, clientIp);
              const statusCode = result.status || (result.success ? 200 : 400);

              res.statusCode = statusCode;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(result));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: 'Failed to parse JSON body' }));
            }
          });
          return;
        }
        next();
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), devEmailApiPlugin()],
  server: {
    port: 3000,
    open: false,
  },
});
