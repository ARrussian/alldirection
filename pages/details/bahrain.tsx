// pages/details/البحرين.tsx
import React from "react";
import { useRouter } from "next/router";

export default function BahrainDetails() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white font-sans p-6">
      <h1 className="text-4xl font-bold text-gold mb-4">رحلة البحرين السياحية 🌅</h1>
      <p className="mb-6">اكتشف جمال البحرين وتاريخها العريق، تشمل الرحلة:</p>

      <ul className="list-disc list-inside space-y-2">
        <li>إقامة مريحة لمدة 4 ليالٍ في فندق راقٍ</li>
        <li>زيارات للمواقع التاريخية والأسواق التقليدية</li>
        <li>جولة بحرية خاصة</li>
        <li>تذكرة طيران ذهاب وعودة</li>
        <li>وجبة إفطار يومية وخدمة التوصيل</li>
        <li>يشمل إصدار الفيزا</li>
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
