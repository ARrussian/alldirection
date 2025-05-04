26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
          <button className="bg-gold text-black px-6 py-3 rounded-full text-lg">
            سجل الآن أو قم بتسجيل الدخول
          </button>
        </Link>
      </div>
    </main>
  );
}


// ✅ pages/register.tsx
import React, { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Register() {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) alert("❌ خطأ في الدخول: " + error.message);
      else alert("✅ تم تسجيل الدخول بنجاح");
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: name } },
      });
      if (error) alert("❌ خطأ في التسجيل: " + error.message);
      else alert("✅ تم إنشاء الحساب بنجاح");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans p-6">
      <h1 className="text-3xl text-gold font-bold mb-6 text-center">
        {isLogin ? "تسجيل الدخول" : "إنشاء حساب جديد"}
      </h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto grid gap-4">
        {!isLogin && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="الاسم الكامل"
            className="bg-gray-800 text-white px-4 py-3 rounded-md border border-gold"
          />
        )}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="البريد الإلكتروني"
          className="bg-gray-800 text-white px-4 py-3 rounded-md border border-gold"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="كلمة المرور"
          className="bg-gray-800 text-white px-4 py-3 rounded-md border border-gold"
        />

        <button type="submit" className="bg-gold text-black py-3 rounded-full hover:opacity-90">
          {isLogin ? "دخول" : "تسجيل الحساب"}
        </button>

        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="text-sm text-gold underline hover:opacity-80"
        >
          {isLogin ? "ليس لديك حساب؟ سجل الآن" : "لديك حساب؟ سجل الدخول"}
        </button>
      </form>
    </main>
  );
}
