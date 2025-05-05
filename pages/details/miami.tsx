// pages/details/miami.tsx
import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function MiamiPage() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  const content = {
    ar: {
      title: "رحلة ميامي السياحية",
      description: "استمتع بالشمس والرمال في ميامي ضمن رحلة تشمل:",
      items: [
        "إقامة فاخرة على شاطئ البحر",
        "رحلات بحرية ومغامرات مائية",
        "زيارة حي آرت ديكو",
        "تسوق في شوارع ميامي الراقية",
        "تنقلات وتأشيرة سياحية"
      ]
    },
    en: {
      title: "Miami Tourist Trip",
      description: "Enjoy the sun and sand in Miami with a trip that includes:",
      items: [
        "Luxury beachside accommodation",
        "Boat tours and water adventures",
        "Visit the Art Deco District",
        "Shopping in upscale Miami streets",
        "Transportation and tourist visa"
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
