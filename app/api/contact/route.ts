export const runtime = "nodejs";

import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, profession, comment } = await request.json();

    if (!name || !email || !comment) {
      return new Response(
        JSON.stringify({ error: "Name, email, and comment are required." }),
        { status: 400 }
      );
    }

    const host = process.env.EMAIL_HOST;
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!host || !user || !pass) {
      console.error("Missing email configuration env vars");
      return new Response(
        JSON.stringify({ error: "Email configuration is not set up." }),
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port: 587,
      secure: false,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: `"Neowax Website" <${user}>`,
      to: "mackleodebenboulo+neowax@gmail.com",
      subject: "New message from Neowax contact form",
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Profession: ${profession || "Not specified"}

Comment:
${comment}
      `.trim(),
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending contact email", error);
    return new Response(
      JSON.stringify({ error: "Failed to send message. Please try again." }),
      { status: 500 }
    );
  }
}


