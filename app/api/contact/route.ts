export const runtime = "nodejs";

const nodemailer = require("nodemailer");

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_PROFESSION_LENGTH = 120;
const MAX_COMMENT_LENGTH = 4000;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanHeaderInput(value: string, maxLen: number) {
  return value.replace(/[\r\n]/g, " ").trim().slice(0, maxLen);
}

export async function POST(request: Request) {
  try {
    const { name, email, profession, comment } = await request.json();

    if (!name || !email || !comment) {
      return new Response(
        JSON.stringify({ error: "Name, email, and comment are required." }),
        { status: 400 }
      );
    }

    if (!emailRegex.test(String(email)) || String(email).length > MAX_EMAIL_LENGTH) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid email address." }),
        { status: 400 }
      );
    }

    const safeName = cleanHeaderInput(String(name), MAX_NAME_LENGTH);
    const safeEmail = cleanHeaderInput(String(email), MAX_EMAIL_LENGTH);
    const safeProfession = profession
      ? cleanHeaderInput(String(profession), MAX_PROFESSION_LENGTH)
      : "Not specified";

    const safeComment = String(comment).slice(0, MAX_COMMENT_LENGTH);

    const host = process.env.EMAIL_HOST;
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const port = Number(process.env.EMAIL_PORT || 587);
    const secure = process.env.EMAIL_SECURE === "true" || port === 465;

    if (!host || !user || !pass) {
      console.error("Missing email configuration env vars");
      return new Response(
        JSON.stringify({ error: "Email configuration is not set up." }),
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: `"Neowax Website" <${user}>`,
      to: "mackleodebenboulo+neowax@gmail.com",
      subject: "New message from Neowax contact form",
      replyTo: safeEmail,
      text: `
Name: ${safeName}
Email: ${safeEmail}
Profession: ${safeProfession}

Comment:
${safeComment}
      `.trim(),
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error: any) {
    console.error("Error sending contact email", error);
    return new Response(
      JSON.stringify({
        error: "Failed to send message. Please try again.",
      }),
      { status: 500 }
    );
  }
}

