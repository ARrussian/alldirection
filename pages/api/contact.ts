// pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@alldirection.com";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await resend.emails.send({
      from: "Alldirection <noreply@alldirection.com>",
      to: toEmail,
      subject: `New contact message from ${name}`,
      html: `
        <h2>New Message from Alldirection Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br />${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
