import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: 'New Contact Form Submission',
    text: message,
    html: `<p>You have a new contact form submission from ${name} (${email}):</p><p>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
