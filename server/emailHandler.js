import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

// In-memory rate limiting map: ip -> [timestamps]
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Helper to escape HTML characters to prevent XSS/injection in emails
export const escapeHtml = (str) => {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

// Rate limiter helper
export const checkRateLimit = (ip) => {
  if (!ip) return true;
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return true;
};

// Core email processing function
export async function processSendEmail(payload, clientIp = '127.0.0.1') {
  const { name, email, subject, message, botField } = payload || {};

  // 1. Honeypot check for spam bots
  if (botField && String(botField).trim() !== '') {
    // Silently succeed for bots
    return { success: true, message: "Message sent successfully!" };
  }

  // 2. Rate limiting check
  if (!checkRateLimit(clientIp)) {
    return {
      status: 429,
      success: false,
      error: "Too many message requests. Please wait a few minutes before trying again."
    };
  }

  // 3. Strict Backend Validation
  const trimmedName = typeof name === 'string' ? name.trim() : '';
  const trimmedEmail = typeof email === 'string' ? email.trim() : '';
  const trimmedSubject = typeof subject === 'string' ? subject.trim() : '';
  const trimmedMessage = typeof message === 'string' ? message.trim() : '';

  if (!trimmedName || trimmedName.length < 2) {
    return { status: 400, success: false, error: "Please enter your name (minimum 2 characters)." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
    return { status: 400, success: false, error: "Please enter a valid email address." };
  }

  if (!trimmedSubject || trimmedSubject.length < 3) {
    return { status: 400, success: false, error: "Please enter a subject (minimum 3 characters)." };
  }

  if (!trimmedMessage || trimmedMessage.length < 10) {
    return { status: 400, success: false, error: "Please enter a message (minimum 10 characters)." };
  }

  // 4. API Key Verification
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey === 're_your_api_key_here') {
    return {
      status: 500,
      success: false,
      error: "RESEND_API_KEY is not set in environment variables. Please configure your Resend API key in .env."
    };
  }

  // 5. Build Resend Email Payload
  const contactEmail = process.env.CONTACT_EMAIL || 'mohitsharma701708@gmail.com';
  const fromEmail = process.env.FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

  const resend = new Resend(apiKey);

  const cleanName = escapeHtml(trimmedName);
  const cleanEmail = escapeHtml(trimmedEmail);
  const cleanSubject = escapeHtml(trimmedSubject);
  const cleanMessage = escapeHtml(trimmedMessage).replace(/\n/g, '<br />');

  const emailHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>New Inquiry from ${cleanName}</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #080B14; margin: 0; padding: 24px; color: #F8FAFC; }
        .card { max-width: 600px; margin: 0 auto; background: #101827; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        .badge { display: inline-block; background: rgba(99, 102, 241, 0.15); color: #818CF8; border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 9999px; padding: 4px 12px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
        h1 { font-size: 20px; font-weight: 700; color: #FFFFFF; margin: 16px 0 24px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 16px; }
        .info-row { margin-bottom: 12px; font-size: 14px; }
        .label { color: #94A3B8; font-weight: 600; display: inline-block; width: 80px; }
        .value { color: #F8FAFC; }
        .message-box { margin-top: 24px; background: #080B14; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 20px; font-size: 14px; line-height: 1.6; color: #E2E8F0; }
        .footer { margin-top: 24px; text-align: center; font-size: 12px; color: #64748B; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 16px; }
        a { color: #38BDF8; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="card">
        <span class="badge">Portfolio Website Inquiry</span>
        <h1>New Message from ${cleanName}</h1>
        
        <div class="info-row">
          <span class="label">Sender:</span>
          <span class="value"><strong>${cleanName}</strong></span>
        </div>
        <div class="info-row">
          <span class="label">Email:</span>
          <span class="value"><a href="mailto:${cleanEmail}">${cleanEmail}</a></span>
        </div>
        <div class="info-row">
          <span class="label">Subject:</span>
          <span class="value">${cleanSubject}</span>
        </div>

        <div class="message-box">
          ${cleanMessage}
        </div>

        <div class="footer">
          <p>Sent from Mohit Sharma's Developer Portfolio</p>
          <p>💡 Tip: Simply click "Reply" in your email client to reply directly to ${cleanName} (${cleanEmail}).</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      reply_to: trimmedEmail,
      subject: `[Portfolio Inquiry] ${trimmedSubject} - from ${trimmedName}`,
      html: emailHtml,
      text: `New Portfolio Message:\n\nSender: ${trimmedName}\nEmail: ${trimmedEmail}\nSubject: ${trimmedSubject}\n\nMessage:\n${trimmedMessage}`
    });

    if (data.error) {
      console.error("Resend API error:", data.error);
      return {
        status: 500,
        success: false,
        error: data.error.message || "Failed to send message via Resend."
      };
    }

    return {
      status: 200,
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
      id: data.id || (data.data && data.data.id)
    };
  } catch (err) {
    console.error("Resend dispatch exception:", err);
    return {
      status: 500,
      success: false,
      error: err.message || "An unexpected error occurred while sending your message."
    };
  }
}

