import { processSendEmail } from '../server/emailHandler.js';

// Helper to safely parse incoming request body across Vercel / Node environments
async function getParsedBody(req) {
  if (req.body) {
    if (typeof req.body === 'string') {
      try {
        return JSON.parse(req.body);
      } catch (e) {
        return {};
      }
    }
    return req.body;
  }

  // If body is not pre-parsed by the runtime, read from incoming stream
  return new Promise((resolve) => {
    let rawData = '';
    req.on('data', (chunk) => {
      rawData += chunk;
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(rawData || '{}'));
      } catch (err) {
        resolve({});
      }
    });
    req.on('error', () => {
      resolve({});
    });
  });
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  // Handle preflight OPTIONS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }

  try {
    const body = await getParsedBody(req);
    const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';
    const result = await processSendEmail(body, clientIp);
    const statusCode = result.status || (result.success ? 200 : 400);

    return res.status(statusCode).json(result);
  } catch (error) {
    console.error("API route error:", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error while processing your request."
    });
  }
}
