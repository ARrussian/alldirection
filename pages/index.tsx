// pages/index.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [lang, setLang] = useState("en");

  const destinations = [
    { name: lang === "ar" ? "دبي" : "Dubai", path: "dubai", image: "/images/dubai.jpg" },
    { name: lang === "ar" ? "البحرين" : "Bahrain", path: "bahrain", image: "/images/bahrain.jpg" },
    { name: lang === "ar" ? "مراكش" : "Marrakech", path: "marrakech", image: "/images/marrakech.jpg" },
    { name: lang === "ar" ? "موسكو" : "Moscow", path: "moscow", image: "/images/moscow.jpg" },
    { name: lang === "ar" ? "ميامي" : "Miami", path: "miami", image: "/images/miami.jpg" },
  ];

  const navItems = [
    { label: lang === "ar" ? "الرئيسية" : "Home", href: "/" },
    { label: lang === "ar" ? "كروبات الخليج" : "Gulf Tours", href: "/packages" },
    { label: lang === "ar" ? "من نحن" : "About", href: "/about" },
    { label: lang === "ar" ? "اتصل بنا" : "Contact", href: "/contact" },
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 -z-10"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navbar */}
      <nav className="bg-gray-900 border-b border-gold px-6 py-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <div className="text-2xl font-bold text-gold">Alldirection</div>
        </div>
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
      <section className="p-8 text-center relative z-10">
        <div className="flex flex-col items-center gap-4 animate-fadeIn">
          <Image src="/logo.png" alt="Logo" width={64} height={64} />
          <h1 className="text-4xl text-gold font-bold">
            {lang === "ar" ? "مرحبًا بك في موقع Alldirection السياحي" : "Welcome to Alldirection Travel"}
          </h1>
        </div>

        <p className="text-lg my-8">
          {lang === "ar"
            ? "اختر وجهتك المفضلة واستعد لرحلة العمر"
            : "Choose your dream destination and get ready for an unforgettable journey"}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {destinations.map(({ name, path, image }) => (
            <div
              key={path}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gold text-center cursor-pointer hover:scale-105 transition"
              onClick={() => router.push(`/details/${path}`)}
            >
              <div className="relative w-full h-48">
                <Image src={image} alt={name} layout="fill" objectFit="cover" />
              </div>
              <div className="p-4">
                <div className="text-lg font-semibold">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
