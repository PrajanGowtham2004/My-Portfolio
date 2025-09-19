import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type ReqBody = {
  name?: string
  email?: string
  message?: string
  isAnilMode?: boolean
}

// Escape HTML to prevent injection
function escapeHtml(unsafe = "") {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ReqBody
    const { name, email, message, isAnilMode } = body ?? {}

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      )
    }

    // Create transporter (SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: Number(process.env.SMTP_PORT ?? 465) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.verify()

    // Email content based on mode
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>")

    let html: string
    if (isAnilMode) {
      html = `
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🔥 Mass Entry Alert! 🔥</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #fff3e0;
      margin: 0;
      padding: 0;
    }
    header {
      background: #e65100;
      color: #fff;
      padding: 15px 30px;
      text-align: center;
    }
    nav {
      background: #bf360c;
      display: flex;
      justify-content: center;
      gap: 20px;
      padding: 10px;
    }
    nav a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      font-size: 14px;
    }
    nav a:hover {
      text-decoration: underline;
    }
    main {
      padding: 30px;
    }
    section {
      background: #fff;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      max-width: 700px;
      margin: auto;
    }
    h2 {
      color: #e65100;
      text-align: center;
    }
    hr {
      border: none;
      border-top: 2px dashed #e65100;
      margin: 15px 0;
    }
    p {
      font-size: 16px;
    }
    footer {
      background: #e65100;
      color: #fff;
      text-align: center;
      padding: 15px;
      margin-top: 30px;
      font-size: 14px;
    }
    .subtext {
      font-size: 14px;
      color: #e65100;
      margin-top: 15px;
      text-align: center;
    }
    .tinytext {
      font-size: 12px;
      color: #bf360c;
      text-align: center;
    }
  </style>
</head>
<body>
  <header>
    <h1>🔥 Mass Entry Alert 🔥</h1>
  </header>

  <nav>
    <a href="#">Home</a>
    <a href="#">Entries</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>

  <main>
    <section>
      <h2>🚀 Nanba/Akka Connect 🚀</h2>
      <p>A new nanba/akka has reached out with Vijay-level energy 💥</p>
      <hr />
      <p><strong>👤 Name:</strong> ${safeName}</p>
      <p><strong>📧 Email:</strong> ${safeEmail}</p>
      <p><strong>💬 Message:</strong><br/>${safeMessage}</p>
      <hr />
      <p class="subtext">Ungaloda mass connect laam TVK vision mariyae! 🚀</p>
      <p class="tinytext">Sent from Portfolio (Anil Mode - Vijay Vibes)</p>
    </section>
  </main>

  <footer>
    &copy; 2025 Anil Mode | Vijay Vibes | All Rights Reserved ✨
  </footer>
</body>
</html>
      `
    } else {
      html = `
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>📩 Portfolio Contact</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f3f4f6;
      margin: 0;
      padding: 0;
    }
    header {
      background: #1e40af;
      color: #fff;
      padding: 15px 30px;
      text-align: center;
    }
    nav {
      background: #1e3a8a;
      display: flex;
      justify-content: center;
      gap: 20px;
      padding: 10px;
    }
    nav a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      font-size: 14px;
    }
    nav a:hover {
      text-decoration: underline;
    }
    main {
      padding: 30px;
    }
    section {
      background: #fff;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
      max-width: 700px;
      margin: auto;
    }
    h2 {
      color: #1e40af;
      text-align: center;
    }
    hr {
      border: none;
      border-top: 1px solid #d1d5db;
      margin: 15px 0;
    }
    p {
      font-size: 16px;
      color: #111827;
    }
    footer {
      background: #1e40af;
      color: #fff;
      text-align: center;
      padding: 15px;
      margin-top: 30px;
      font-size: 14px;
    }
    .tinytext {
      font-size: 12px;
      color: #6b7280;
      text-align: center;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <header>
    <h1>📩 Portfolio Contact</h1>
  </header>

  <nav>
    <a href="#">Home</a>
    <a href="#">Contacts</a>
    <a href="#">Projects</a>
    <a href="#">About</a>
  </nav>

  <main>
    <section>
      <h2>New Professional Inquiry</h2>
      <p>You’ve received a new professional inquiry.</p>
      <hr />
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Message:</strong><br/>${safeMessage}</p>
      <hr />
      <p class="tinytext">This message was sent from your portfolio contact form.</p>
    </section>
  </main>

  <footer>
    &copy; 2025 Your Portfolio | All Rights Reserved
  </footer>
</body>
</html>

      `
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
      to: process.env.SMTP_TO ?? process.env.SMTP_USER,
      subject: isAnilMode
        ? `🔥 Mass Nanba Connected — ${safeName} 🚀`
        : `Portfolio Contact — ${safeName}`,
      html,
      replyTo: email,
    })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error("Error sending email:", err)
    return NextResponse.json(
      { success: false, error: err?.message ?? "Server error" },
      { status: 500 }
    )
  }
}
