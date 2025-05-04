// pages/packages.tsx
import React, { useState } from "react";
import Image from "next/image";

export default function Packages() {
  const [lang, setLang] = useState("en");

  const packages = [
    {
      title: lang === "ar" ? "باقة دبي الفاخرة" : "Luxury Dubai Package",
      image: "/images/dubai.jpg",
      description: lang === "ar"
        ? "إقامة 5 نجوم، جولات خاصة، تذاكر طيران، ونقل VIP في دبي"
        : "5-star stay, private tours, flight tickets, and VIP transport in Dubai",
    },
    {
      title: lang === "ar" ? "باقة البحرين الممتعة" : "Fun Bahrain Package",
      image: "/images/bahrain.jpg",
      description: lang === "ar"
        ? "4 أيام شاملة الفندق، جولات ثقافية، واستئجار سيارة فاخرة"
        : "4-day trip with hotel, cultural tours, and luxury car rental",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gold">
          {lang === "ar" ? "كروبات الخليج" : "Gulf Travel Packages"}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-gray-900 border border-gold rounded-xl overflow-hidden">
            <div className="relative w-full h-64">
              <Image src={pkg.image} alt={pkg.title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl text-gold font-semibold mb-2">{pkg.title}</h2>
              <p className="text-white text-base">{pkg.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
