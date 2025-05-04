// pages/about.tsx
import React from "react";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl text-gold font-bold mb-6 text-center">من نحن</h1>
      <div className="max-w-3xl mx-auto space-y-4 leading-relaxed">
        <p>
          <strong>alldirection</strong> هي شركة سياحة وسفر مقرها في الولايات المتحدة الأمريكية 🇺🇸،
          تقدم خدمات متكاملة لتنظيم الرحلات إلى مختلف الوجهات العالمية.
        </p>
        <p>
          نحن متخصصون في تنظيم الكروبات السياحية إلى الخليج، المغرب، روسيا، أمريكا، ودول عربية
          عديدة، مع تغطية شاملة: من الفيزا إلى الفنادق والطيران والجولات المحلية.
        </p>
        <p>
          هدفنا هو تقديم تجربة فاخرة ومريحة للمسافرين العرب، مع الاهتمام بأدق التفاصيل وبأسعار تنافسية.
        </p>
        <p>
          تواصل معنا لأي استفسار وسنكون سعداء بخدمتك. ✈️🌍
        </p>
      </div>
    </main>
  );
}
