// pages/details/موسكو.tsx
import React from "react";
import { useRouter } from "next/router";

export default function MoscowDetails() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white font-sans p-6">
      <h1 className="text-4xl font-bold text-gold mb-4">رحلة موسكو السياحية ❄️</h1>
      <p className="mb-6">خض تجربة لا تُنسى في العاصمة الروسية موسكو، تتضمن الرحلة:</p>

      <ul className="list-disc list-inside space-y-2">
        <li>إقامة فاخرة في وسط المدينة</li>
        <li>زيارة الكرملين والميدان الأحمر</li>
        <li>رحلة بالقطار السريع</li>
        <li>تذكرة طيران ذهاب وعودة</li>
        <li>إفطار يومي وجولات منظمة</li>
        <li>تأشيرة عند الوصول متاحة</li>
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
