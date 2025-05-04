// pages/details/مراكش.tsx
import React from "react";
import { useRouter } from "next/router";

export default function MarrakechDetails() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white font-sans p-6">
      <h1 className="text-4xl font-bold text-gold mb-4">رحلة مراكش السياحية 🏜️</h1>
      <p className="mb-6">استمتع بجمال المدينة الحمراء والمزيج بين الأصالة والحداثة، وتشمل الرحلة:</p>

      <ul className="list-disc list-inside space-y-2">
        <li>إقامة في رياض تقليدي مغربي</li>
        <li>زيارة جامع الفنا والأسواق القديمة</li>
        <li>جولة إلى جبال أطلس</li>
        <li>تذكرة طيران ذهاب وعودة</li>
        <li>إفطار مغربي يومي</li>
        <li>لا حاجة لفيزا للمواطنين العرب</li>
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
