import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'digitalhafid@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #0E390E; color: white; padding: 24px; }
              .header h2 { margin: 0; font-size: 20px; letter-spacing: 2px; text-transform: uppercase; }
              .content { background: #f9f9f9; padding: 24px; border: 1px solid #e0e0e0; }
              .field { margin-bottom: 16px; }
              .label { font-weight: bold; color: #666; display: block; margin-bottom: 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; }
              .value { background: white; padding: 10px 14px; border: 1px solid #ddd; }
              .footer { text-align: center; margin-top: 20px; color: #999; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Name</span>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <span class="label">Email</span>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <span class="label">Phone</span>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                <div class="field">
                  <span class="label">Message</span>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>Received via Smart Move DFW Contact Form</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting Smart Move DFW',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #0E390E; color: white; padding: 24px; text-align: center; }
              .header h2 { margin: 0; font-size: 20px; letter-spacing: 2px; text-transform: uppercase; }
              .content { background: white; padding: 30px; border: 1px solid #e0e0e0; }
              .footer { text-align: center; margin-top: 20px; padding: 20px; background: #f9f9f9; color: #666; font-size: 13px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Smart Move DFW</h2>
              </div>
              <div class="content">
                <p>Hi ${name},</p>
                <p>Thank you for reaching out to Smart Move DFW. We have received your message and will get back to you within 24 hours.</p>
                <p>In the meantime, feel free to explore our apartment listings and resources on the site.</p>
                <p>We look forward to helping you make your Smart Move.</p>
                <p><strong>Smart Move DFW</strong><br>214-296-7143<br>digitalhafid@gmail.com</p>
              </div>
              <div class="footer">
                <p>Smart Move DFW — Dallas-Fort Worth Apartment Locating</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email. Please try again later.' }, { status: 500 });
  }
}
