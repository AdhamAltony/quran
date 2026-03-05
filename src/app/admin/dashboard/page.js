const ADMIN_STATS = [
  { label: "إجمالي الطلاب", value: "248", delta: "+12 هذا الأسبوع" },
  { label: "المعلمون النشطون", value: "18", delta: "+2 هذا الشهر" },
  { label: "الحصص اليوم", value: "34", delta: "26 مكتملة" },
  { label: "معدل الالتزام", value: "93%", delta: "تحسن 4%" },
];

const PENDING_TASKS = [
  "مراجعة طلبي تسجيل جديدين في قسم غير الناطقين بالعربية",
  "اعتماد خطة اختبارات الحفظ للأسبوع القادم",
  "تأكيد جدول المعلمين لشهر مارس 2026",
];

const RECENT_ACTIVITY = [
  { text: "إضافة دورة جديدة: البلاغة التطبيقية", time: "منذ 20 دقيقة" },
  { text: "تحديث بيانات 6 طلاب في قسم المناهج", time: "منذ ساعة" },
  { text: "رفع 3 تقارير أداء من فريق المتابعة", time: "منذ ساعتين" },
];

export default function AdminDashboardPage() {
  return (
    <main className="site-container py-10" dir="rtl">
      <section className="modern-card rounded-3xl border border-white/70 p-6 shadow-xl shadow-emerald-900/5 sm:p-8">
        <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
          لوحة تحكم الإدارة
        </p>
        <h1 className="mt-3 text-2xl font-black text-emerald-950 sm:text-3xl">نظرة عامة على المنصة</h1>
        <p className="mt-2 text-sm text-slate-600">متابعة مؤشرات الأداء، المهام التشغيلية، وآخر الأنشطة في بوابة الإدارة.</p>
      </section>

      <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ADMIN_STATS.map((stat) => (
          <article key={stat.label} className="modern-card rounded-2xl border border-emerald-100/70 p-5 shadow-lg shadow-emerald-900/5">
            <p className="text-sm font-bold text-emerald-700">{stat.label}</p>
            <p className="mt-1 text-3xl font-black text-emerald-950">{stat.value}</p>
            <p className="mt-1 text-xs text-slate-600">{stat.delta}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <article className="modern-card rounded-3xl border border-white/70 p-6 shadow-xl shadow-emerald-900/5 lg:col-span-2">
          <h2 className="text-xl font-black text-emerald-950">المهام المعلّقة</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {PENDING_TASKS.map((task) => (
              <li key={task} className="rounded-2xl border border-emerald-100 bg-white/70 p-4">
                {task}
              </li>
            ))}
          </ul>
        </article>

        <article className="modern-card rounded-3xl border border-white/70 p-6 shadow-xl shadow-emerald-900/5">
          <h2 className="text-xl font-black text-emerald-950">آخر النشاطات</h2>
          <ul className="mt-4 space-y-3">
            {RECENT_ACTIVITY.map((item) => (
              <li key={item.text} className="rounded-2xl border border-emerald-100 bg-white/70 p-4">
                <p className="text-sm font-bold text-emerald-900">{item.text}</p>
                <p className="mt-1 text-xs text-slate-600">{item.time}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
