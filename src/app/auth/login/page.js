import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="site-container py-10" dir="rtl">
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="modern-card rounded-3xl border border-white/70 p-6 shadow-xl shadow-emerald-900/5 sm:p-8">
          <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
            بوابة الدخول
          </p>
          <h1 className="mt-3 text-2xl font-black text-emerald-950 sm:text-3xl">تسجيل الدخول إلى المنصة</h1>
          <p className="mt-2 text-sm text-slate-600">
            أدخل بياناتك للوصول إلى لوحة الطالب أو الإدارة ومتابعة تقدم التعلم.
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-emerald-900">
                البريد الإلكتروني
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="w-full rounded-xl border border-emerald-200 bg-white/85 px-4 py-3 text-emerald-950 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-300/40"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-bold text-emerald-900">
                كلمة المرور
              </label>
              <input
                id="password"
                type="password"
                placeholder="********"
                className="w-full rounded-xl border border-emerald-200 bg-white/85 px-4 py-3 text-emerald-950 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-300/40"
              />
            </div>

            <div className="flex items-center justify-between gap-3 text-sm">
              <label className="inline-flex items-center gap-2 text-slate-700">
                <input type="checkbox" className="h-4 w-4 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500" />
                تذكرني
              </label>
              <Link href="#" className="font-bold text-emerald-700 hover:text-emerald-800">
                نسيت كلمة المرور؟
              </Link>
            </div>

            <button
              type="submit"
              className="glow-button mt-2 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-l from-emerald-500 to-emerald-600 px-6 py-3 text-sm font-bold text-white transition-all hover:from-emerald-400 hover:to-emerald-500"
            >
              تسجيل الدخول
            </button>
          </form>
        </article>

        <article className="modern-card rounded-3xl border border-white/70 p-6 shadow-xl shadow-emerald-900/5 sm:p-8">
          <h2 className="text-xl font-black text-emerald-950">الدخول السريع</h2>
          <p className="mt-2 text-sm text-slate-600">اختر البوابة المناسبة حسب دورك داخل المنصة.</p>
          <div className="mt-6 space-y-3">
            <Link
              href="/student/dashboard"
              className="inline-flex w-full items-center justify-between rounded-2xl border border-emerald-200 bg-white/75 px-4 py-3 text-sm font-bold text-emerald-900 transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              <span>بوابة الطالب</span>
              <span>→</span>
            </Link>
            <Link
              href="/admin/dashboard"
              className="inline-flex w-full items-center justify-between rounded-2xl border border-emerald-200 bg-white/75 px-4 py-3 text-sm font-bold text-emerald-900 transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              <span>بوابة الإدارة</span>
              <span>→</span>
            </Link>
            <Link
              href="/quran-and-sciences"
              className="inline-flex w-full items-center justify-between rounded-2xl border border-emerald-200 bg-white/75 px-4 py-3 text-sm font-bold text-emerald-900 transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              <span>بوابة المعلم</span>
              <span>→</span>
            </Link>
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 text-sm text-slate-700">
            <p className="font-bold text-emerald-900">حساب تجريبي</p>
            <p className="mt-1">email: demo@mashael.com</p>
            <p>password: 12345678</p>
          </div>
        </article>
      </section>
    </main>
  );
}
