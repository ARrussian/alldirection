// pages/details/bahrain.tsx
import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function BahrainPage() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  const content = {
    ar: {
      title: "رحلة البحرين السياحية",
      description: "استمتع بجمال البحرين في رحلة تتضمن:",
      items: [
        "إقامة في فندق 4 نجوم مع إطلالة بحرية",
        "جولة في متحف البحرين الوطني",
        "زيارة سوق المنامة القديم",
        "رحلة بحرية واكتشاف الجزر",
        "تنقلات خاصة وتأشيرة سياحية"
      ]
    },
    en: {
      title: "Bahrain Tourist Trip",
      description: "Enjoy the beauty of Bahrain with a trip that includes:",
      items: [
        "Stay in a 4-star hotel with sea view",
        "Tour of the Bahrain National Museum",
        "Visit to the old Manama Souq",
        "Boat trip and island discovery",
        "Private transportation and tourist visa"
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
