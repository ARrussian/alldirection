// pages/index.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [lang, setLang] = useState("en");

  const destinations = [
    { name: lang === "ar" ? "دبي" : "Dubai", path: "dubai", emoji: "🌆", image: "/images/dubai.jpg" },
    { name: lang === "ar" ? "البحرين" : "Bahrain", path: "bahrain", emoji: "🏝️", image: "/images/bahrain.jpg" },
    { name: lang === "ar" ? "مراكش" : "Marrakech", path: "marrakech", emoji: "🏜️", image: "/images/marrakech.jpg" },
    { name: lang === "ar" ? "موسكو" : "Moscow", path: "moscow", emoji: "❄️", image: "/images/moscow.jpg" },
    { name: lang === "ar" ? "ميامي" : "Miami", path: "miami", emoji: "🌴", image: "/images/miami.jpg" },
  ];

  const navItems = [
    { label: lang === "ar" ? "الرئيسية" : "Home", href: "/" },
    { label: lang === "ar" ? "كروبات الخليج" : "Gulf Tours", href: "/packages" },
    { label: lang === "ar" ? "من نحن" : "About", href: "/about" },
    { label: lang === "ar" ? "اتصل بنا" : "Contact", href: "/contact" },
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="bg-gray-900 border-b border-gold px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gold">Alldirection</div>
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-gold transition">
              {item.label}
            </Link>
          ))}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-gray-800 text-white border border-gold rounded px-2 py-1 text-sm"
          >
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="p-8 text-center">
        <h1 className="text-4xl text-gold font-bold mb-4">
          {lang === "ar" ? "🌍 مرحبًا بك في موقع Alldirection السياحي" : "🌍 Welcome to Alldirection Travel"}
        </h1>
        <p className="text-lg mb-10">
          {lang === "ar"
            ? "اختر وجهتك المفضلة واستعد لرحلة العمر"
            : "Choose your dream destination and get ready for an unforgettable journey"}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {destinations.map(({ name, path, emoji, image }) => (
            <div
              key={path}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gold text-center cursor-pointer hover:scale-105 transition"
              onClick={() => router.push(`/details/${path}`)}
            >
              <div className="relative w-full h-48">
                <Image src={image} alt={name} layout="fill" objectFit="cover" />
              </div>
              <div className="p-4">
                <div className="text-2xl mb-1">{emoji}</div>
                <div className="text-lg font-semibold">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
