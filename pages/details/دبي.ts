// pages/details/دبي.tsx
import React from "react";
import { useRouter } from "next/router";

export default function DubaiDetails() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white font-sans p-6">
      <h1 className="text-4xl font-bold text-gold mb-4">رحلة دبي السياحية 🏙️</h1>
      <p className="mb-6">استمتع برحلة مميزة إلى مدينة دبي الحديثة، تتضمن:</p>

      <ul className="list-disc list-inside space-y-2">
        <li>إقامة 5 نجوم في فندق فاخر</li>
        <li>جولات سياحية يومية</li>
        <li>زيارة برج خليفة ودبي مول</li>
        <li>تذكرة طيران ذهاب وعودة</li>
        <li>إفطار يومي وخدمة تنقلات</li>
        <li>يشمل إصدار الفيزا السياحية</li>
      </ul>

      <button
        onClick={() => router.push("/register")}
        className="mt-8 bg-gold text-black px-6 py-3 rounded-full hover:opacity-90"
      >
        احجز رحلتك الآن
      </button>
    </main>
  );
}
