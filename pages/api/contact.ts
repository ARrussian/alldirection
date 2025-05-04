// pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "جميع الحقول مطلوبة" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "بريد إلكتروني غير صالح" });
  }

  try {
    await resend.emails.send({
      from: "alldirection <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER_EMAIL || "info@alldirection.com",
      subject: `رسالة جديدة من ${name}`,
      html: `<strong>البريد:</strong> ${email}<br/><strong>الرسالة:</strong><br/>${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ error: "فشل في الإرسال" });
  }
}
