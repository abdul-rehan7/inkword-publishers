import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration - Replace with your actual email settings
const EMAIL_CONFIG = {
  host: 'smtp.gmail.com', // or your email provider's SMTP server
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
};

// The email where you want to receive contact form submissions
const RECIPIENT_EMAIL = 'abdulrehan0317@gmail.com'; // Replace with your actual email

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

    // Log the submission for now (you can see this in the terminal where you run npm run dev)
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone || 'Not provided');
    console.log('Service:', service || 'Not specified');
    console.log('Subject:', subject);
    console.log('Message:', message);
    console.log('Timestamp:', new Date().toLocaleString());
    console.log('=====================================');

    // Check if email configuration is available
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('❌ Email not configured - contact form data logged above');
      console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'Set' : 'Not set');
      console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Set' : 'Not set');
      return NextResponse.json(
        { message: 'Contact form submitted successfully. We will get back to you soon!' },
        { status: 200 }
      );
    }

    console.log('✅ Email configuration found, attempting to send emails...');
    console.log('From email:', process.env.EMAIL_USER);
    console.log('To email:', RECIPIENT_EMAIL);

    // Create transporter only if email is configured
    const transporter = nodemailer.createTransport(EMAIL_CONFIG);

    // Test the connection first
    try {
      await transporter.verify();
      console.log('✅ Email server connection successful');
    } catch (verifyError) {
      console.error('❌ Email server connection failed:', verifyError);
      return NextResponse.json(
        { message: 'Contact form submitted successfully. We will get back to you soon!' },
        { status: 200 }
      );
    }

    // Email content for you (the business owner)
    const emailToOwner = {
      from: process.env.EMAIL_USER,
      to: RECIPIENT_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="padding: 20px; background: #f9f9f9;">
            <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr style="background: white;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
              </tr>
              <tr style="background: #f8f9fa;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 12px; border: 1px solid #ddd;"><a href="mailto:${email}" style="color: #667eea;">${email}</a></td>
              </tr>
              <tr style="background: white;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${phone || 'Not provided'}</td>
              </tr>
              <tr style="background: #f8f9fa;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Service:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${service || 'Not specified'}</td>
              </tr>
              <tr style="background: white;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Subject:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${subject}</td>
              </tr>
            </table>

            <h3 style="color: #333; margin-top: 30px;">Message:</h3>
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; font-style: italic; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>

            <div style="margin-top: 30px; padding: 15px; background: #e3f2fd; border-radius: 8px; text-align: center;">
              <p style="margin: 0; color: #1976d2;">
                <strong>Reply directly to this email to respond to ${name}</strong>
              </p>
            </div>
          </div>

          <div style="background: #333; color: white; padding: 15px; border-radius: 0 0 10px 10px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">This email was sent from your website contact form</p>
            <p style="margin: 5px 0 0 0;">InkWord Publishers - ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      replyTo: email, // So you can reply directly to the customer
    };

    // Auto-reply email to the customer
    const autoReplyEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting InkWord Publishers',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Thank You for Contacting Us!</h1>
          </div>
          
          <div style="padding: 20px;">
            <p style="font-size: 16px; line-height: 1.6; color: #333;">Dear ${name},</p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Thank you for reaching out to InkWord Publishers! We've received your message and our team will review it shortly.
            </p>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
              <h3 style="margin-top: 0; color: #333;">Your Message Summary:</h3>
              <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
              <p style="margin: 5px 0;"><strong>Service:</strong> ${service || 'Not specified'}</p>
            </div>

            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              <strong>What happens next?</strong>
            </p>
            <ul style="color: #333; line-height: 1.6;">
              <li>Our team will review your inquiry within 24 hours</li>
              <li>A dedicated project manager will reach out to you</li>
              <li>We'll schedule a free consultation to discuss your needs</li>
            </ul>

            <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <h3 style="margin-top: 0; color: #2e7d32;">Quick Response Guarantee</h3>
              <p style="margin: 10px 0; color: #2e7d32; font-weight: 500;">We typically respond within 24 hours, often much sooner!</p>
            </div>

            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              In the meantime, feel free to explore our website to learn more about our services. If you have any urgent questions, 
              don't hesitate to call us at <strong>+1 (555) 123-4567</strong>.
            </p>

            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Best regards,<br>
              <strong>The InkWord Publishers Team</strong>
            </p>
          </div>

          <div style="background: #333; color: white; padding: 15px; border-radius: 0 0 10px 10px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">InkWord Publishers</p>
            <p style="margin: 5px 0 0 0;">Professional Publishing Services | www.inkwordpublishers.com</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    try {
      await transporter.sendMail(emailToOwner);
      await transporter.sendMail(autoReplyEmail);
      console.log('Emails sent successfully!');
    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      // Still return success to user, but log the email error
      return NextResponse.json(
        { message: 'Contact form submitted successfully. We will get back to you soon!' },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Return more specific error information for debugging
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Detailed error:', errorMessage);
    
    return NextResponse.json(
      { error: 'Failed to process contact form', details: errorMessage },
      { status: 500 }
    );
  }
}