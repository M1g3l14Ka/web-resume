'use server';

import nodemailer from 'nodemailer';
import { IContactForm, ISendEmailResult } from '@/types';

export async function sendContactForm(data: IContactForm): Promise<ISendEmailResult> {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    return {
      success: false,
      error: 'Server configuration error',
      details: 'GMAIL_USER or GMAIL_APP_PASSWORD not set'
    };
  }

  if (!data.name || !data.email || !data.message) {
    return { success: false, error: 'All fields are required' };
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio" <${gmailUser}>`,
      to: 'katcion.play@gmail.com',
      replyTo: data.email,
      subject: `Portfolio: New message from ${data.name}`,
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

    return { success: true };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return {
      success: false,
      error: 'Failed to send message',
      details: errorMessage
    };
  }
}
