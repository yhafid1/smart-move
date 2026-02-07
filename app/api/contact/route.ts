import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
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
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'info@dfwapartmentlocator.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #b8794e, #9d6542); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border: 1px solid #e0e0e0; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #666; display: block; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-radius: 4px; border: 1px solid #ddd; }
              .footer { text-align: center; margin-top: 20px; color: #999; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Name:</span>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <span class="label">Phone:</span>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                <div class="field">
                  <span class="label">Message:</span>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>Received via DFW Apartment Locator Contact Form</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };
    const autoReplyOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting DFW Apartment Locator',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #b8794e, #9d6542); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: white; padding: 30px; border: 1px solid #e0e0e0; border-radius: 0 0 8px 8px; }
              .footer { text-align: center; margin-top: 20px; padding: 20px; background: #f9f9f9; border-radius: 8px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">Thank You for Reaching Out!</h2>
              </div>
              <div class="content">
                <p>Hi ${name},</p>
                <p>Thank you for contacting DFW Apartment Locator. We've received your message and one of our team members will get back to you within 24 hours.</p>
                <p>In the meantime, feel free to explore:</p>
                <ul>
                  <li><a href="https://dfwapartmentlocator.com/#apartments">Our current apartment listings</a></li>
                  <li><a href="https://dfwapartmentlocator.com/investors">Investor opportunities</a></li>
                  <li><a href="https://dfwapartmentlocator.com/about">Learn more about our services</a></li>
                </ul>
                <p>We look forward to helping you find your perfect apartment in the DFW metroplex!</p>
                <p><strong>The DFW Apartment Locator Team</strong></p>
              </div>
              <div class="footer">
                <p style="color: #666; font-size: 14px; margin: 0;">
                  DFW Apartment Locator<br>
                  📧 info@dfwapartmentlocator.com<br>
                  📱 (214) 555-0100
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    };
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
