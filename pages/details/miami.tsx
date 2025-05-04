// pages/details/ميامي.tsx
import React from "react";
import { useRouter } from "next/router";

export default function MiamiDetails() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white font-sans p-6">
      <h1 className="text-4xl font-bold text-gold mb-4">رحلة ميامي السياحية 🌴</h1>
      <p className="mb-6">عش تجربة فريدة في شواطئ ميامي الساحرة، وتشمل الرحلة:</p>

      <ul className="list-disc list-inside space-y-2">
        <li>إقامة في فندق فاخر على البحر</li>
        <li>رحلات بحرية وزيارات لشارع لينكولن</li>
        <li>جولات تسوق حصرية</li>
        <li>تذكرة طيران ذهاب وعودة</li>
        <li>إفطار أمريكي يومي وخدمة مواصلات</li>
        <li>يتطلب تأشيرة أمريكية سارية</li>
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
