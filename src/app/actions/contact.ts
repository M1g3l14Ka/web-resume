'use server';

import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactForm(data: ContactFormData) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return { success: false, error: 'Server configuration error' };
  }

  if (!data.name || !data.email || !data.message) {
    return { success: false, error: 'All fields are required' };
  }

  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: [process.env.RECIPIENT_EMAIL || ''],
      subject: `Portfolio: New message from ${data.name}`,
      replyTo: data.email,
      html: `
        <div style="font-family: monospace; max-width: 600px;">
          <h2 style="color: #a855f7;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #333;"><strong>Name</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #333;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #333;"><strong>Email</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #333;">${data.email}</td>
            </tr>
          </table>
          <h3 style="color: #a855f7; margin-top: 20px;">Message:</h3>
          <p style="color: #ccc; line-height: 1.6;">${data.message.replace(/\n/g, '<br>')}</p>
          <hr style="border: none; border-top: 1px solid #333; margin-top: 30px;">
          <p style="color: #666; font-size: 12px;">Reply directly to: ${data.email}</p>
        </div>
      `,
    });

    console.log('Email sent successfully:', result);
    return { success: true };
  } catch (error) {
    console.error('Failed to send contact form:', error);
    return { success: false, error: 'Failed to send message' };
  }
}
