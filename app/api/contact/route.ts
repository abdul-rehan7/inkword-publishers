import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API Key from Environment Variables
const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = 'abdulrehan0317@gmail.com';
export const runtime = 'edge';
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, service } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY is not set in environment variables');
      return NextResponse.json({ message: 'Email service not configured' }, { status: 500 });
    }

    const ownerEmail = await resend.emails.send({
      from: 'InkWord Publishers <onboarding@resend.dev>',
      to: RECIPIENT_EMAIL,
      reply_to: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 20px; background: #f9f9f9;">
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr><td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Name:</td><td style="padding: 12px; border: 1px solid #ddd;">${name}</td></tr>
              <tr><td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email:</td><td style="padding: 12px; border: 1px solid #ddd;">${email}</td></tr>
              <tr><td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone:</td><td style="padding: 12px; border: 1px solid #ddd;">${phone || 'Not provided'}</td></tr>
              <tr><td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Service:</td><td style="padding: 12px; border: 1px solid #ddd;">${service || 'Not specified'}</td></tr>
            </table>
            <h3 style="color: #333;">Message:</h3>
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; font-style: italic;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>`
    });

    await resend.emails.send({
      from: 'InkWord Publishers <onboarding@resend.dev>',
      to: email,
      subject: 'Thank you for contacting InkWord Publishers',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Thank You!</h1>
          </div>
          <div style="padding: 20px;">
            <p>Dear ${name},</p>
            <p>We've received your message regarding <strong>${subject}</strong>. Our team will review it and get back to you within 24 hours.</p>
            <p>Best regards,<br><strong>The InkWord Publishers Team</strong></p>
          </div>
        </div>`
    });
    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to process request' },{ status: 500 });
  }
}