import { NextRequest, NextResponse } from 'next/server';
const RECIPIENT_EMAIL = 'abdulrehan0317@gmail.com';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!process.env.RESEND_API_KEY) {
       return NextResponse.json({ error: 'Mail service not configured' }, { status: 500 });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: RECIPIENT_EMAIL,
        reply_to: email,
        subject: `New Contact: ${subject}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Message:</strong> ${message}</p>`,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}