// components/Navbar.tsx
import React from "react";
import Link from "next/link";

export default function Navbar({ lang, setLang }: { lang: 'en' | 'ar', setLang: (l: 'en' | 'ar') => void }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      <div className="text-xl font-bold">
        <Link href="/">AllDirection</Link>
      </div>
      <div className="flex gap-4 items-center">
        <Link href="/" className="hover:underline">Home</Link>
        <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}>
          🌐 {lang === 'en' ? 'العربية' : 'English'}
        </button>
      </div>
    </nav>
  );
}
