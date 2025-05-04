// pages/about.tsx
import React, { useState } from "react";

export default function About() {
  const [lang, setLang] = useState("en");

  return (
    <main className="min-h-screen bg-black text-white font-sans p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gold">
          {lang === "ar" ? "من نحن" : "About Us"}
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

      <div className="max-w-3xl mx-auto text-lg leading-relaxed">
        {lang === "ar" ? (
          <p>
            Alldirection هي شركة سياحة مقرها في الولايات المتحدة، متخصصة في تنظيم رحلات فاخرة ومخصصة إلى دول الخليج، أمريكا، روسيا، والمغرب.
            نحن نهدف إلى تقديم أفضل تجربة سفر من خلال تنظيم كروبات، تذاكر طيران، إقامة فندقية، وتأمين خدمات التأشيرة.
          </p>
        ) : (
          <p>
            Alldirection is a U.S.-based travel company specializing in luxury and custom tours to the Gulf countries, America, Russia, and Morocco.
            We provide full travel experiences including groups, flights, hotel bookings, and visa arrangements.
          </p>
        )}
      </div>
    </main>
  );
}
