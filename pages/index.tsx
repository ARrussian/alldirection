// ✅ pages/index.tsx
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-gold text-center mb-6">
        🌍 مرحبًا بك في alldirection
      </h1>
      <p className="text-center mb-10">
        رحلات | فنادق | طيران | حفلات | تأشيرات | كروبات الخليج والمغرب وروسيا وأمريكا
      </p>

      <div className="text-center">
        <Link href="/register">
          <button className="bg-gold text-black px-6 py-3 rounded-full text-lg">
            سجل الآن أو قم بتسجيل الدخول
          </button>
        </Link>
      </div>
    </main>
  );
}
