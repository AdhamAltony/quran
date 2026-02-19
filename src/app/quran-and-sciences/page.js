import Link from "next/link";

const items = [
  "تحفيظ تفاعلي بالصوت والصورة",
  "تقسيم حسب العمر والمستوى",
  "اختبارات حفظ أسبوعية",
  "غرف تسميع مباشرة مع شيخ",
  "مسار الإجازة",
];

export default function QuranAndSciencesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#082433] via-[#0b2f42] to-[#10364a] text-emerald-50">
      <section className="site-container py-24">
        <Link
          href="/"
          className="page-back-link mb-8"
        >
          العودة إلى الرئيسية
        </Link>

        <article className="glass rounded-3xl p-8 shadow-xl shadow-emerald-900/30">
          <h1 className="mb-6 text-3xl font-black text-white sm:text-4xl">ركن القرآن الكريم وعلومه</h1>
          <ul className="list-inside list-disc space-y-3 text-emerald-100/95">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
