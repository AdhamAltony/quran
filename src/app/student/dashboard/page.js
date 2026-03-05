import Link from "next/link";

export default function StudentDashboardPage() {
  return (
    <main className="site-container py-16" dir="rtl">
      <h1 className="text-2xl font-bold text-emerald-950">لوحة الطالب</h1>
      <p className="mt-3 text-slate-700">يمكنك الآن فتح الملف الشخصي الكامل للطالب.</p>
      <div className="mt-6">
        <Link
          href="/student/profile"
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-l from-emerald-500 to-emerald-600 px-5 py-2.5 text-sm font-bold text-white transition-all hover:from-emerald-400 hover:to-emerald-500"
        >
          فتح الملف الشخصي
        </Link>
      </div>
    </main>
  );
}
