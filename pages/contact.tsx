// pages/contact.tsx
import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // لاحقًا: ربط مع Resend أو EmailJS
    alert("✅ تم إرسال رسالتك بنجاح. سنرد عليك قريبًا");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl text-gold font-bold mb-6 text-center">📧 تواصل معنا</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4">
        <input
          type="text"
          placeholder="الاسم الكامل"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-800 border border-gold px-4 py-3 rounded-md"
          required
        />
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-800 border border-gold px-4 py-3 rounded-md"
          required
        />
        <textarea
          placeholder="رسالتك"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-gray-800 border border-gold px-4 py-3 rounded-md"
          required
        ></textarea>
        <button className="bg-gold text-black py-3 rounded-full hover:opacity-90">
          إرسال
        </button>
      </form>
    </main>
  );
}


// ✅ Footer ثابت (مثلاً داخل layout أو مباشرة في index)
export function Footer() {
  return (
    <footer className="bg-gray-900 text-center text-white py-4 border-t border-gold">
      <p>© 2025 alldirection — Based in USA 🇺🇸</p>
      <p className="text-sm mt-1">للتواصل: info@alldirection.com</p>
    </footer>
  );
}
