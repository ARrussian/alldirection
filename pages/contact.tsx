// pages/contact.tsx
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Contact() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const userLang = navigator.language.startsWith("ar") ? "ar" : "en";
    setLang(userLang);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-4 py-12 flex flex-col items-center">
      {/* Navigation Bar */}
      <nav className="w-full max-w-5xl flex justify-between items-center px-6 py-4 mb-8 border-b border-gold">
        <div className="text-2xl font-bold text-gold flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-24 h-24" />
          <span>AllDirection</span>
        </div>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-gold transition">HOME</Link>
          <Link href="/about" className="hover:text-gold transition">ABOUT</Link>
          <Link href="/contact" className="hover:text-gold transition">CONTACT</Link>
        </div>
      </nav>

      <div className="w-full max-w-2xl bg-gray-900 rounded-xl p-10 border border-gold">
        <h1 className="text-4xl font-bold text-gold mb-8 text-center">
          {lang === "ar" ? "اتصل بنا" : "Contact Us"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 text-lg">
          <div>
            <label className="block mb-2 font-semibold">
              {lang === "ar" ? "الاسم" : "Name"}
            </label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 text-white p-3 rounded"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              {lang === "ar" ? "البريد الإلكتروني" : "Email"}
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 text-white p-3 rounded"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              {lang === "ar" ? "رسالتك" : "Message"}
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 text-white p-3 rounded min-h-[140px]"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-gold text-black text-lg font-bold py-2 px-10 rounded hover:opacity-90 transition"
            >
              {lang === "ar" ? "إرسال" : "Send"}
            </button>
          </div>

          {status === "sent" && (
            <p className="text-green-400 mt-4 text-center">
              {lang === "ar" ? "تم الإرسال بنجاح" : "Message sent successfully!"}
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-4 text-center">
              {lang === "ar" ? "حدث خطأ، حاول مرة أخرى" : "Something went wrong. Please try again."}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
