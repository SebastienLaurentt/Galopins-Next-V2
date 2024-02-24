import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  try {
    // Utilisation de await pour attendre la résolution ou le rejet de la promesse
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent' });
  } catch (err:any) {
    // Gestion de l'erreur en cas d'échec de l'envoi de l'email
    return NextResponse.json({ error: err.message });
  }
}
