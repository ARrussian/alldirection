// pages/details/marrakech.tsx
import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function MarrakechPage() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  const content = {
    ar: {
      title: "رحلة مراكش السياحية",
      description: "اكتشف سحر مراكش في رحلة تشمل:",
      items: [
        "إقامة في رياض تقليدي مغربي",
        "زيارة جامع الفنا والأسواق الشعبية",
        "جولات سياحية في المدينة القديمة",
        "رحلة إلى جبال الأطلس",
        "تأشيرة وتنقلات خاصة"
      ]
    },
    en: {
      title: "Marrakech Tourist Trip",
      description: "Discover the charm of Marrakech with a trip that includes:",
      items: [
        "Stay in a traditional Moroccan Riad",
        "Visit Jemaa el-Fnaa and local souks",
        "City tours in the Medina",
        "Trip to the Atlas Mountains",
        "Visa and private transfers"
      ]
    }
  };

  const current = content[lang];

  return (
    <main className="min-h-screen bg-black text-white">
      <Head>
        <title>{current.title}</title>
      </Head>
      <Navbar lang={lang} setLang={setLang} />
      <section className="flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 className="text-5xl font-bold mb-6 text-gold">{current.title}</h1>
        <p className="text-lg max-w-2xl mb-8">{current.description}</p>
        <ul className="text-left text-lg leading-loose max-w-xl">
          {current.items.map((item, i) => (
            <li key={i} className="mb-2">{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
