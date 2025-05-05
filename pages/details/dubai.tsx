import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";

export default function DubaiDetails() {
  const [lang, setLang] = useState<"ar" | "en">("en");

  useEffect(() => {
    const userLang = navigator.language.startsWith("ar") ? "ar" : "en";
    setLang(userLang);
  }, []);

  return (
    <>
      <Head>
        <title>{lang === "ar" ? "رحلة دبي السياحية" : "Dubai Tour Package"}</title>
      </Head>
      <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center justify-center text-center">
        <Image
          src="/images/dubai.jpg"
          alt="Dubai"
          width={800}
          height={500}
          className="rounded-lg mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">
          {lang === "ar" ? "رحلة دبي السياحية 🏙️" : "Dubai Tour Package 🏙️"}
        </h1>
        <ul className="text-xl leading-relaxed list-disc text-start">
          {lang === "ar" ? (
            <>
              <li>إقامة 5 نجوم في فندق فاخر</li>
              <li>جولات سياحية يومية</li>
              <li>زيارة برج خليفة ودبي مول</li>
              <li>تذكرة طيران ذهاب وعودة</li>
              <li>إفطار يومي وخدمة تنقلات</li>
              <li>يشمل إصدار التأشيرة السياحية</li>
            </>
          ) : (
            <>
              <li>5-star hotel accommodation</li>
              <li>Daily sightseeing tours</li>
              <li>Visit Burj Khalifa & Dubai Mall</li>
              <li>Round-trip flight included</li>
              <li>Daily breakfast & transfers</li>
              <li>Includes tourist visa issuance</li>
            </>
          )}
        </ul>
      </main>
    </>
  );
}
