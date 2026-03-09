const TEACHER_STATS = [
    { label: "إجمالي الحصص", value: "24", delta: "هذا الأسبوع" },
    { label: "الطلاب النشطون", value: "18", delta: "معك في 3 أقسام" },
    { label: "الحصص اليوم", value: "4", delta: "2 مكتملة" },
    { label: "التقييم العام", value: "4.8/5", delta: "تحسن ملحوظ" },
];

const UPCOMING_CLASSES = [
    { student: "أحمد محمود", course: "ركن القرآن", time: "10:00 صباحاً" },
    { student: "منى علي", course: "المناهج الدراسية", time: "01:00 مساءً" },
    { student: "عمر خالد", course: "اللغة العربية", time: "05:30 مساءً" },
];

const LATEST_NOTIFICATIONS = [
    { text: "تم تأكيد جدولك للأسبوع القادم.", time: "منذ ساعة" },
    { text: "الطالب 'أحمد' اجتاز اختبار الحفظ بنجاح.", time: "منذ 3 ساعات" },
    { text: "تذكير: موعد حلقتك القادمة بعد 15 دقيقة.", time: "منذ ساعتين" },
];

export default function TeacherDashboardPage() {
    return (
        <main className="site-container py-10" dir="rtl">
            <section className="modern-card rounded-3xl border border-white/70 p-6 shadow-xl shadow-emerald-900/5 sm:p-8">
                <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    لوحة تحكم المعلم
                </p>
                <h1 className="mt-3 text-2xl font-black text-emerald-950 sm:text-3xl">مرحباً بك في لوحة تحكمك</h1>
                <p className="mt-2 text-sm text-slate-600">يمكنك هنا متابعة حصصك القادمة، نشاطات طلابك، ومؤشرات أدائك كمعلم.</p>
            </section>

            <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {TEACHER_STATS.map((stat) => (
                    <article key={stat.label} className="modern-card rounded-2xl border border-emerald-100/70 p-5 shadow-lg shadow-emerald-900/5 hover:-translate-y-1 transition-transform">
                        <p className="text-sm font-bold text-emerald-700">{stat.label}</p>
                        <p className="mt-1 text-3xl font-black text-emerald-950">{stat.value}</p>
                        <p className="mt-1 text-xs text-slate-600">{stat.delta}</p>
                    </article>
                ))}
            </section>

            <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <article className="modern-card rounded-3xl border border-white/70 p-6 shadow-xl shadow-emerald-900/5 lg:col-span-2">
                    <h2 className="text-xl font-black text-emerald-950">الحلقات / الحصص القادمة</h2>
                    <ul className="mt-4 space-y-3 text-sm text-slate-700">
                        {UPCOMING_CLASSES.map((cls, idx) => (
                            <li key={idx} className="flex items-center justify-between rounded-2xl border border-emerald-100 bg-white/70 p-4 transition-colors hover:bg-emerald-50/50">
                                <div className="flex flex-col">
                                    <span className="font-bold text-emerald-950">{cls.student}</span>
                                    <span className="text-xs text-slate-500 mt-1">{cls.course}</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-100/80 px-2 py-1 text-xs font-bold text-emerald-700">
                                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        {cls.time}
                                    </span>
                                    <button className="mt-2 text-xs font-bold text-emerald-600 hover:text-emerald-800 transition-colors">دخول للغرفة</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </article>

                <article className="modern-card rounded-3xl border border-white/70 p-6 shadow-xl shadow-emerald-900/5">
                    <h2 className="text-xl font-black text-emerald-950">أحدث الإشعارات</h2>
                    <ul className="mt-4 space-y-3">
                        {LATEST_NOTIFICATIONS.map((item, idx) => (
                            <li key={idx} className="rounded-2xl border border-emerald-100 bg-white/70 p-4">
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
