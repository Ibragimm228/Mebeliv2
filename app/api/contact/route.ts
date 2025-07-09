import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    console.log(transporter)

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "mebelshik69@mail.ru",
      subject: "Новая заявка с сайта",
      text: `
        Имя: ${name}
        Телефон: ${phone}
        Сообщение: ${message || 'Не указано'}
      `,
      html: `
        <h2>Новая заявка с сайта</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Сообщение:</strong> ${message || 'Не указано'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Сообщение успешно отправлено" },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: "Ошибка при отправке сообщения" },
      { status: 500 }
    );
  }
} 