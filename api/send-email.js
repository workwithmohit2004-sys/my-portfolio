import { processSendEmail } from '../server/emailHandler.js';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }

  try {
    const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';
    const result = await processSendEmail(req.body, clientIp);
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

