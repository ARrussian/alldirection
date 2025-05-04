// pages/contact.tsx
import React, { useState } from "react";

export default function Contact() {
  const [lang, setLang] = useState("en");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error", error);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gold">
          {lang === "ar" ? "اتصل بنا" : "Contact Us"}
        </h1>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="bg-gray-800 text-white border border-gold rounded px-3 py-1"
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
      </div>

      {submitted ? (
        <p className="text-center text-green-400 text-lg">
          {lang === "ar" ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent successfully!"}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={lang === "ar" ? "الاسم الكامل" : "Full Name"}
            className="bg-gray-800 text-white px-4 py-3 rounded border border-gold"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={lang === "ar" ? "البريد الإلكتروني" : "Email Address"}
            className="bg-gray-800 text-white px-4 py-3 rounded border border-gold"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={lang === "ar" ? "رسالتك" : "Your Message"}
            className="bg-gray-800 text-white px-4 py-3 rounded border border-gold h-40"
            required
          />
          <button type="submit" className="bg-gold text-black py-3 rounded hover:opacity-90">
            {lang === "ar" ? "إرسال" : "Send Message"}
          </button>
        </form>
      )}
    </main>
  );
}
