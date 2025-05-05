// pages/details/moscow.tsx
import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function MoscowPage() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  const content = {
    ar: {
      title: "رحلة موسكو السياحية",
      description: "استكشف عراقة موسكو ضمن رحلة تشمل:",
      items: [
        "إقامة فاخرة وسط العاصمة",
        "زيارة الكرملين والساحة الحمراء",
        "جولات في متاحف وقصور تاريخية",
        "رحلة بحرية في نهر موسكفا",
        "تأشيرة ودليل سياحي"
      ]
    },
    en: {
      title: "Moscow Tourist Trip",
      description: "Explore the heritage of Moscow with a trip that includes:",
      items: [
        "Luxury accommodation in the city center",
        "Visit to the Kremlin and Red Square",
        "Tours in historical museums and palaces",
        "River cruise in Moskva River",
        "Visa and tour guide"
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
