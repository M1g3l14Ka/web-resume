'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export async function sendContactForm(data: ContactFormData) {
    try {
        await resend.emails.send({
            from: process.env.FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
            to: [process.env.RECIPIENT_EMAIL || ''],
            subject: `Portfolio: New message from ${data.name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Message:</strong></p>
                <p>${data.message.replace(/\n/g, '<br>')}</p>
            `,
            replyTo: data.email,
        });

        return { success: true };
    } catch (error) {
        console.error('Failed to send contact form:', error);
        return { success: false, error: 'Failed to send message' };
    }
}
