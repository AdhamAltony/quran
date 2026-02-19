import Link from "next/link";

const items = [
  "لغة عربية",
  "اللغات الأجنبية: (الإنجليزية، الفرنسية، الألمانية)",
  "الرياضيات (منهج: عربي - إنجليزي)",
  "العلوم: الفيزياء والكيمياء والأحياء (منهج: عربي – إنجليزي)",
  "الدراسات اجتماعية: تاريخ وجغرافيا.",
  "تربية إسلامية.",
];

export default function EgyptGulfCurriculaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#082433] via-[#0b2f42] to-[#10364a] text-emerald-50">
      <section className="site-container py-24">
        <Link
          href="/"
          className="mb-8 inline-flex rounded-lg border border-emerald-200/35 bg-white/10 px-4 py-2 text-sm font-bold text-emerald-100 transition-colors hover:bg-white/15"
        >
          العودة إلى الرئيسية
        </Link>

        <article className="glass rounded-3xl p-8 shadow-xl shadow-emerald-900/30">
          <h1 className="mb-6 text-3xl font-black text-white sm:text-4xl">المناهج الدراسية (مصر + الخليج)</h1>
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
