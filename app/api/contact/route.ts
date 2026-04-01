import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const RECIPIENT_EMAIL = 'abdulrehan0317@gmail.com';

export const runtime = 'edge'; // This is what Cloudflare needs

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, service } = body;

    if (!process.env.RESEND_API_KEY) {
       return NextResponse.json({ error: 'Mail service not configured' }, { status: 500 });
    }

    // Send the email using Resend (which uses 'fetch' internally)
    await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: RECIPIENT_EMAIL,
      reply_to: email,
      subject: `New Contact: ${subject}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Message:</strong> ${message}</p>`
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}