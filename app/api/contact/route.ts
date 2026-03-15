import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for port 465, false for 587
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { fullName, email, phone, destination, dates, groupSize, message } = body;

        if (!fullName || !email || !destination || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        await transporter.sendMail({
            from: `"Travex Ventures" <${process.env.SMTP_USER}>`,
            to: 'reservations@travexventures.com',
            replyTo: email,
            subject: `New Enquiry: ${destination} — ${fullName}`,
            html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Georgia, serif; background: #0a0a0a; color: #f5f0e8; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 0 auto; background: #141414; border: 1px solid rgba(201,168,76,0.2); }
    .header { background: #0a0a0a; padding: 32px 40px; border-bottom: 1px solid rgba(201,168,76,0.2); text-align: center; }
    .header h1 { font-size: 22px; color: #c9a84c; letter-spacing: 0.1em; margin: 0; }
    .header p { font-size: 11px; letter-spacing: 0.3em; color: #7a7060; text-transform: uppercase; margin: 8px 0 0; }
    .body { padding: 40px; }
    .row { margin-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 20px; }
    .row:last-child { border-bottom: none; margin-bottom: 0; }
    .label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.25em; color: #7a7060; margin-bottom: 6px; font-family: Arial, sans-serif; }
    .value { font-size: 16px; color: #f5f0e8; }
    .message-box { background: rgba(201,168,76,0.05); border-left: 2px solid #c9a84c; padding: 16px 20px; border-radius: 2px; }
    .footer { padding: 20px 40px; text-align: center; border-top: 1px solid rgba(201,168,76,0.1); }
    .footer p { font-size: 11px; color: #4a4540; font-family: Arial, sans-serif; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>Travex Ventures</h1>
      <p>New Travel Enquiry</p>
    </div>
    <div class="body">
      <div class="row">
        <div class="label">Full Name</div>
        <div class="value">${fullName}</div>
      </div>
      <div class="row">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${email}" style="color:#c9a84c;">${email}</a></div>
      </div>
      ${phone ? `
      <div class="row">
        <div class="label">Phone Number</div>
        <div class="value">${phone}</div>
      </div>` : ''}
      <div class="row">
        <div class="label">Destination of Interest</div>
        <div class="value">${destination}</div>
      </div>
      ${dates ? `
      <div class="row">
        <div class="label">Travel Dates / Month</div>
        <div class="value">${dates}</div>
      </div>` : ''}
      ${groupSize ? `
      <div class="row">
        <div class="label">Group Size</div>
        <div class="value">${groupSize} traveller${Number(groupSize) !== 1 ? 's' : ''}</div>
      </div>` : ''}
      <div class="row">
        <div class="label">Message / Vision</div>
        <div class="message-box">
          <div class="value" style="white-space: pre-wrap;">${message}</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>Sent from travexventures.com/contact</p>
    </div>
  </div>
</body>
</html>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact Form Error:', error);
        return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
    }
}
