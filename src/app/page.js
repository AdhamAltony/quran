import Link from "next/link";

/* ───────────────────── Icon Components ───────────────────── */

function StarIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function BookOpenIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function AcademicCapIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}

function UsersIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function ClockIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function HeartIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function GlobeIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

function MicrophoneIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
    </svg>
  );
}

function SparklesIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

function CheckCircleIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function PlayIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
  );
}

function ChevronDownIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function QuoteIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" opacity="0.2">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
    </svg>
  );
}

function ChatIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  );
}

function VideoCameraIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9.75a2.25 2.25 0 002.25-2.25V7.5a2.25 2.25 0 00-2.25-2.25H4.5A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}

function Cog6ToothIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function LanguageIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
    </svg>
  );
}

/* ───────────────────── NAVBAR ───────────────────── */

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "خدماتنا", href: "#services" },
  { label: "برامجنا", href: "#programs" },
  { label: "من نحن", href: "#about" },
  { label: "تواصل معنا", href: "#contact" },
];

function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 transition-all duration-300">
      <div className="nav-surface shadow-[0_12px_36px_-16px_rgba(4,16,31,0.85)]">
        <div className="site-container">
          <div className="flex items-center justify-between min-h-[4.5rem] sm:min-h-20 gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-shadow shrink-0 icon-ring">
                <span className="text-white text-xl font-bold leading-none">ن</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-white font-bold text-base sm:text-lg leading-normal whitespace-nowrap truncate">أكاديمية النور</span>
                <span className="hidden sm:block text-emerald-200/80 text-xs leading-normal">Al-Noor Academy</span>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-emerald-50/90 hover:text-white text-sm font-medium transition-colors whitespace-nowrap py-2 relative after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-emerald-300 after:transition-all hover:after:w-full"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <Link href="/login" className="hidden sm:inline-flex items-center justify-center text-emerald-50/90 hover:text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors hover:bg-white/10 whitespace-nowrap">
                تسجيل الدخول
              </Link>
              <Link href="/register" className="glow-button inline-flex items-center justify-center bg-gradient-to-l from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white text-xs sm:text-sm font-bold px-4 sm:px-7 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/45 hover:-translate-y-0.5 whitespace-nowrap">
                ابدأ الآن
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ───────────────────── HERO SECTION ───────────────────── */

function HeroSection() {
  return (
    <section id="hero" className="relative isolate min-h-screen flex items-center justify-center overflow-hidden bg-[var(--ink-950)]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[#021a24] via-[#0a364a] to-[#052836] animate-gradient" />
      <div className="absolute inset-0 geometric-pattern opacity-50" />
      <div className="hero-wash" />
      <div className="hero-wash secondary" />
      <div className="hero-mesh" />

      {/* Decorative orbs */}
      <div className="hidden sm:block absolute top-20 left-20 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-float" />
      <div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] lg:w-[620px] lg:h-[620px] bg-emerald-300/15 rounded-full blur-3xl animate-float-soft" />

      {/* Geometric decorations */}
      <div className="hidden lg:block absolute top-32 left-10 w-20 h-20 border border-emerald-500/20 rounded-2xl rotate-45 animate-spin-slow" />
      <div className="hidden lg:block absolute bottom-40 right-16 w-16 h-16 border border-gold-500/20 rounded-full animate-spin-slow" />

      <div className="site-container relative z-10 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid items-center gap-10 lg:gap-14 lg:grid-cols-2">
          <div className="text-center lg:text-right">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass ring-1 ring-emerald-100/20 shadow-xl shadow-emerald-950/40 mb-8 animate-fade-in-up">
              <span className="w-2.5 h-2.5 bg-emerald-200 rounded-full animate-pulse" />
              <span className="text-emerald-100 text-sm font-medium leading-normal">
                منصة تعليمية متكاملة لتعلم القرآن الكريم
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-7 animate-fade-in-up" style={{ animationDelay: "0.1s", lineHeight: 1.3 }}>
              رحلتك مع
              <span className="block gradient-text mt-3">القرآن الكريم</span>
              <span className="block text-2xl sm:text-4xl lg:text-5xl font-bold text-emerald-50 mt-4" style={{ lineHeight: 1.45 }}>
                تبدأ من هنا
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl lg:max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl text-emerald-100/85 mb-8 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
              تعلّم القرآن الكريم مع نخبة من المعلمين المتخصصين عبر جلسات تفاعلية
              مباشرة، في أي وقت ومن أي مكان
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              {["دروس فردية مباشرة", "مرونة في المواعيد", "متابعة يومية"].map((chip) => (
                <span key={chip} className="hero-chip">
                  {chip}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-stretch justify-center lg:justify-start gap-4 mb-14 animate-fade-in-up w-full" style={{ animationDelay: "0.3s" }}>
              <Link href="/register" className="glow-button group inline-flex items-center justify-center gap-4 w-full sm:w-auto bg-gradient-to-l from-emerald-300 to-emerald-400 hover:from-emerald-200 hover:to-emerald-300 text-[#083946] font-black px-8 sm:px-10 py-4 sm:py-5 rounded-2xl transition-all shadow-2xl shadow-emerald-500/35 hover:shadow-emerald-400/55 hover:-translate-y-1 text-base sm:text-lg whitespace-nowrap">
                <span>احجز حصتك المجانية</span>
                <span className="w-11 h-11 bg-[#0d4555]/15 rounded-xl flex items-center justify-center group-hover:bg-[#0d4555]/25 transition-colors shrink-0">
                  <PlayIcon className="w-5 h-5 text-[#083946]" />
                </span>
              </Link>
              <Link href="#services" className="inline-flex items-center justify-center gap-3 w-full sm:w-auto glass border border-emerald-300/30 text-emerald-50 font-medium px-8 sm:px-9 py-4 sm:py-5 rounded-2xl hover:bg-white/15 transition-all whitespace-nowrap">
                <span>تعرّف على برامجنا</span>
                <ChevronDownIcon className="w-5 h-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 max-w-4xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              {[
                { number: "٥٠٠٠+", label: "طالب وطالبة" },
                { number: "١٥٠+", label: "معلم متخصص" },
                { number: "٩٨%", label: "نسبة الرضا" },
                { number: "٢٤/٧", label: "دعم متواصل" },
              ].map((stat) => (
                <div key={stat.label} className="hero-stat-card">
                  <div className="text-2xl sm:text-3xl font-black text-white leading-normal">
                    {stat.number}
                  </div>
                  <div className="text-emerald-100/80 text-sm mt-2 leading-normal">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-gold-400" />
                ))}
              </div>
              <span className="text-white font-bold text-sm leading-normal">٤.٩</span>
              <span className="text-emerald-100/65 text-sm leading-normal">من ٥ | +٢٠٠٠ تقييم</span>
            </div>
          </div>

          <div className="relative max-w-lg mx-auto w-full animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="hero-card rounded-3xl p-7 sm:p-9">
              <span className="inline-flex items-center gap-2 text-emerald-100/90 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                خطة تعليم مخصصة لك
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-3 mb-5 leading-snug">
                تعلّم، احفظ، وارتقِ
                <span className="block text-emerald-200">بإشراف معلمين متخصصين</span>
              </h3>

              <ul className="space-y-4">
                {[
                  "اختبار تحديد مستوى مجاني قبل البدء",
                  "منهج تدريجي يناسب عمرك وهدفك",
                  "تقارير أداء أسبوعية وتوصيات واضحة",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                    <span className="text-emerald-50/90 text-sm sm:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-emerald-200/25 bg-emerald-200/10 px-5 py-4">
                <p className="text-emerald-50 text-sm sm:text-base font-medium leading-relaxed">
                  حصة تجريبية مجانية لمدة ٣٠ دقيقة مع تقييم فوري وخطة متابعة.
                </p>
              </div>
            </div>

            <div className="absolute -top-5 -right-5 w-20 h-20 rounded-2xl bg-gold-400/35 blur-sm animate-float pointer-events-none" />
            <div className="absolute -bottom-7 -left-7 w-24 h-24 rounded-full bg-emerald-400/25 blur-md animate-float-delayed pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f0f8f8] to-transparent" />
    </section>
  );
}

/* ───────────────────── FEATURES / SERVICES SECTION ───────────────────── */

function FeaturesSection() {
  const features = [
    {
      icon: <VideoCameraIcon className="w-7 h-7" />,
      title: "دروس تحفيظ بالفيديو",
      description: "دروس فيديو تفاعلية للمبتدئين لحفظ القرآن الكريم خطوة بخطوة مع متابعة مستمرة",
      color: "from-emerald-500 to-emerald-700",
      shadowColor: "shadow-emerald-500/20",
      href: "/tahfeez",
    },
    {
      icon: <BookOpenIcon className="w-7 h-7" />,
      title: "دروس أونلاين تجريبية",
      description: "جلسات تعليمية مباشرة عبر الإنترنت مع معلمين متخصصين - جرّب حصة مجانية الآن",
      color: "from-emerald-500 to-emerald-700",
      shadowColor: "shadow-emerald-500/20",
      href: "/online-lessons",
    },
    {
      icon: <LanguageIcon className="w-7 h-7" />,
      title: "تعليم اللغة العربية",
      description: "برنامج متكامل لتعليم اللغة العربية لغير الناطقين بها من الصفر حتى الإتقان",
      color: "from-emerald-500 to-emerald-700",
      shadowColor: "shadow-emerald-500/20",
      href: "/arabic-language",
    },
    {
      icon: <ChatIcon className="w-7 h-7" />,
      title: "خدمة المحادثة مع الطلاب",
      description: "تواصل مباشر مع المعلمين والطلاب عبر نظام محادثة متطور للإجابة على استفساراتك",
      color: "from-emerald-500 to-emerald-700",
      shadowColor: "shadow-emerald-500/20",
      href: "/chat",
    },
    {
      icon: <MicrophoneIcon className="w-7 h-7" />,
      title: "التجويد والتلاوة",
      description: "تعلّم أحكام التجويد من الأساسيات حتى الإتقان مع تطبيق عملي مباشر",
      color: "from-emerald-500 to-emerald-700",
      shadowColor: "shadow-emerald-500/20",
      href: "/tajweed",
    },
    {
      icon: <SparklesIcon className="w-7 h-7" />,
      title: "التفسير والفهم",
      description: "فهم معاني الآيات وأسباب النزول والدروس المستفادة مع أمثلة معاصرة",
      color: "from-emerald-500 to-emerald-700",
      shadowColor: "shadow-emerald-500/20",
      href: "/tafseer",
    },
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-[#f1f9f9] via-[#f5fbfb] to-[#ecf5f4] relative overflow-hidden" id="services">
      <div className="absolute -top-28 right-0 w-[380px] h-[380px] bg-emerald-300/25 rounded-full blur-3xl animate-float-soft" />
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20 animate-fade-in-up">
          <span className="inline-block text-emerald-700 font-bold text-sm bg-emerald-100 px-5 py-2 rounded-full mb-5">
            خدماتنا
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 mb-5" style={{ lineHeight: 1.4 }}>
            كل ما تحتاجه في <span className="text-emerald-600">مكان واحد</span>
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-lg leading-relaxed">
            نقدم مجموعة شاملة من البرامج التعليمية المصممة لتناسب جميع المستويات والأعمار
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Link
              key={feature.title}
              href={feature.href}
              className={`card-hover modern-card relative rounded-3xl p-8 sm:p-10 ${feature.shadowColor} shadow-xl group block animate-fade-in-up`}
              style={{ animationDelay: `${0.08 * idx}s` }}
            >
              {/* Gradient corner decoration */}
              <div className={`absolute -top-20 -left-20 w-44 h-44 bg-gradient-to-br ${feature.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-2xl`} />

              <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg ${feature.shadowColor} group-hover:scale-105 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-emerald-950 mb-3 leading-normal">
                {feature.title}
              </h3>
              <p className="text-slate-700 leading-relaxed text-base">
                {feature.description}
              </p>
              <div className="mt-6 text-emerald-700 font-medium text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5">
                <span>اكتشف المزيد</span>
                <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── PROGRAMS / PRICING SECTION ───────────────────── */

function ProgramsSection() {
  const programs = [
    {
      name: "براعم القرآن",
      emoji: "🌱",
      subtitle: "للأطفال من ٤ إلى ٨ سنوات",
      price: "١٤٩",
      period: "شهرياً",
      features: [
        "٤ حصص شهرياً",
        "٣٠ دقيقة لكل حصة",
        "معلمة متخصصة للأطفال",
        "منهج تفاعلي ممتع",
        "تقارير أسبوعية لولي الأمر",
      ],
      popular: false,
    },
    {
      name: "نور الإيمان",
      emoji: "🌟",
      subtitle: "للشباب والكبار",
      price: "٢٤٩",
      period: "شهرياً",
      features: [
        "٨ حصص شهرياً",
        "٤٥ دقيقة لكل حصة",
        "معلم متخصص حسب المستوى",
        "حفظ + تجويد + تفسير",
        "متابعة يومية واختبارات",
        "شهادة إتمام معتمدة",
      ],
      popular: true,
    },
    {
      name: "المسار المتقدم",
      emoji: "📖",
      subtitle: "للراغبين بالإجازة",
      price: "٣٩٩",
      period: "شهرياً",
      features: [
        "١٢ حصة شهرياً",
        "٦٠ دقيقة لكل حصة",
        "شيخ مُجاز بالسند",
        "برنامج إجازة متكامل",
        "مراجعة مكثفة يومية",
        "اختبارات تقييم دورية",
        "دعم على مدار الساعة",
      ],
      popular: false,
    },
  ];

  return (
    <section className="section-spacing bg-[var(--ink-950)] relative overflow-hidden" id="programs">
      <div className="aurora-bg" />
      <div className="absolute inset-0 geometric-pattern" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-float-soft" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-float-delayed" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20 animate-fade-in-up">
          <span className="inline-block text-emerald-200 font-bold text-sm bg-emerald-500/10 border border-emerald-400/20 px-5 py-2 rounded-full mb-5">
            باقاتنا
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5" style={{ lineHeight: 1.4 }}>
            اختر البرنامج <span className="gradient-text">المناسب لك</span>
          </h2>
          <p className="text-emerald-100/85 max-w-2xl mx-auto text-lg leading-relaxed">
            برامج مرنة مصممة لتناسب احتياجاتك وجدولك الزمني
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {programs.map((program, idx) => (
            <div
              key={program.name}
              className={`relative rounded-3xl overflow-hidden transition-all duration-500 animate-fade-in-up ${
                program.popular
                  ? "modern-card bg-white/95 scale-100 md:scale-105 shadow-[0_30px_60px_-20px_rgba(16,185,129,0.45)]"
                  : "glass border border-emerald-400/20 hover:bg-white/12 hover:-translate-y-1 shadow-[0_25px_50px_-24px_rgba(4,16,31,0.9)]"
              }`}
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              {/* Popular badge */}
              {program.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-l from-emerald-300 to-gold-400 text-emerald-950 text-center py-2 text-sm font-bold">
                  ⭐ الأكثر طلباً
                </div>
              )}

              <div className={`p-8 sm:p-10 ${program.popular ? "pt-16" : ""}`}>
                {/* Plan name */}
                <div className="text-center mb-8">
                  <span className="text-4xl mb-4 block">{program.emoji}</span>
                  <h3 className={`text-2xl font-bold mb-2 leading-normal ${program.popular ? "text-emerald-950" : "text-white"}`}>
                    {program.name}
                  </h3>
                  <p className={`text-sm leading-normal ${program.popular ? "text-slate-700" : "text-emerald-100/90"}`}>
                    {program.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-10">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className={`text-5xl font-black leading-normal ${program.popular ? "text-emerald-800" : "text-white"}`}>
                      {program.price}
                    </span>
                    <span className={`text-lg leading-normal ${program.popular ? "text-slate-600" : "text-emerald-100/90"}`}>
                      ج.م / {program.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircleIcon className={`w-5 h-5 shrink-0 ${program.popular ? "text-emerald-500" : "text-emerald-300"}`} />
                      <span className={`text-sm leading-normal ${program.popular ? "text-slate-700" : "text-emerald-100/95"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/register"
                  className={`glow-button block w-full py-4.5 rounded-2xl font-bold text-lg transition-all hover:-translate-y-0.5 text-center leading-normal ${
                    program.popular
                      ? "bg-gradient-to-l from-emerald-500 to-emerald-500 text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
                      : "glass text-white hover:bg-white/15 border border-emerald-300/20"
                  }`}
                  style={{ paddingTop: "1.125rem", paddingBottom: "1.125rem" }}
                >
                  ابدأ الآن
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Trial note */}
        <p className="text-center text-emerald-100/80 mt-8 text-sm">
          جميع الباقات تشمل حصة تجريبية مجانية • إمكانية الإلغاء في أي وقت
        </p>
      </div>
    </section>
  );
}

/* ───────────────────── WHY CHOOSE US SECTION ───────────────────── */

function WhyChooseUsSection() {
  const reasons = [
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "معلمون مُعتمدون",
      description: "جميع معلمينا حاصلون على إجازات معتمدة ومؤهلات تربوية عالية",
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: "مرونة كاملة",
      description: "اختر الأوقات التي تناسبك مع إمكانية إعادة جدولة الحصص بسهولة",
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "اهتمام فردي",
      description: "حصص فردية مع اهتمام خاص بكل طالب وفقاً لمستواه وأهدافه",
    },
    {
      icon: <GlobeIcon className="w-8 h-8" />,
      title: "من أي مكان بالعالم",
      description: "لا حدود جغرافية - تعلّم من منزلك أينما كنت في العالم",
    },
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-[#f2f9f9] via-[#f4f8f8] to-[#ecf4f4] relative overflow-hidden" id="about">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text side */}
          <div>
            <span className="inline-block text-emerald-700 font-bold text-sm bg-emerald-100 px-5 py-2 rounded-full mb-5 animate-fade-in-up">
              لماذا نحن؟
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 mb-6 animate-fade-in-up" style={{ lineHeight: 1.4 }}>
              نبني جيلاً يحمل <span className="text-emerald-600">نور القرآن</span>
            </h2>
            <p className="text-slate-700 text-lg mb-12 leading-relaxed animate-fade-in-up stagger-1">
              نؤمن بأن تعلّم القرآن الكريم حق لكل مسلم، لذا نسعى لتقديم أفضل
              تجربة تعليمية تجمع بين الأصالة والتقنية الحديثة.
            </p>

            <div className="space-y-8">
              {reasons.map((reason, idx) => (
                <div key={reason.title} className="flex gap-5 group items-start animate-fade-in-up" style={{ animationDelay: `${0.1 + idx * 0.08}s` }}>
                  <div className="w-16 h-16 shrink-0 bg-white/85 border border-emerald-100 rounded-2xl shadow-lg shadow-emerald-500/10 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300">
                    {reason.icon}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-emerald-950 mb-2 leading-normal">
                      {reason.title}
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual side - Quranic verse card */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#0a3a4f] via-[#0f5f78] to-[#093648] rounded-3xl p-10 shadow-2xl overflow-hidden animate-fade-in-up">
              <div className="absolute inset-0 geometric-pattern" />
              <div className="aurora-bg" />
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-gold-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-300/20 rounded-full blur-2xl" />

              <div className="relative text-center">
                <div className="text-6xl mb-6">🕌</div>
                <p className="text-emerald-100/90 text-lg leading-loose mb-8 font-medium" style={{ fontFamily: "serif" }}>
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </p>
                <p className="text-2xl md:text-3xl text-white leading-loose font-medium mb-4" style={{ lineHeight: 2 }}>
                  ﴿ وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ ﴾
                </p>
                <p className="text-gold-300 font-medium text-sm mt-4">
                  سورة القمر - آية ١٧
                </p>
              </div>

              {/* Decorative border */}
              <div className="absolute top-4 right-4 left-4 bottom-4 border border-emerald-300/25 rounded-2xl pointer-events-none" />
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold-400 rounded-2xl opacity-25 rotate-12 animate-float" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-400 rounded-full opacity-20 animate-float-delayed" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── TESTIMONIALS SECTION ───────────────────── */

function TestimonialsSection() {
  const testimonials = [
    {
      name: "أم عبدالله",
      role: "ولية أمر",
      text: "أطفالي يحبون حصصهم مع أكاديمية النور. المعلمات صبورات ومتخصصات والمنهج ممتع جداً. لاحظت تقدماً ملحوظاً في حفظهم خلال شهرين فقط.",
      rating: 5,
      avatar: "أ",
    },
    {
      name: "أحمد محمد",
      role: "طالب - برنامج الإجازة",
      text: "حصلت على إجازتي في القراءات من خلال الأكاديمية. الشيخ المُجاز كان متميزاً في أسلوبه وصبره. تجربة لا تُنسى والحمد لله.",
      rating: 5,
      avatar: "أ",
    },
    {
      name: "فاطمة الزهراء",
      role: "طالبة - برنامج التجويد",
      text: "كنت أبحث عن مكان أتعلم فيه التجويد بشكل صحيح ووجدت ضالتي هنا. المعلمة ممتازة والجلسات مرنة تناسب جدولي المزدحم.",
      rating: 5,
      avatar: "ف",
    },
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-[#eef6f5] via-[#f3f8f8] to-[#f8fbfb] relative overflow-hidden">
      <div className="site-container">
        <div className="text-center mb-14 sm:mb-20 animate-fade-in-up">
          <span className="inline-block text-emerald-700 font-bold text-sm bg-emerald-100 px-5 py-2 rounded-full mb-5">
            آراء طلابنا
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 mb-5" style={{ lineHeight: 1.4 }}>
            ماذا يقول <span className="text-emerald-600">طلابنا</span> عنا
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-lg leading-relaxed">
            نفخر بثقة آلاف الطلاب وأولياء الأمور من حول العالم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={t.name} className="card-hover modern-card rounded-3xl p-8 sm:p-10 shadow-xl shadow-emerald-500/10 relative animate-fade-in-up" style={{ animationDelay: `${0.1 * idx}s` }}>
              <QuoteIcon className="w-10 h-10 text-emerald-600 mb-5" />

              <p className="text-slate-600 leading-relaxed mb-6 text-base">
                {t.text}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-gold-400" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-slate-100">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950 leading-normal">{t.name}</h4>
                  <p className="text-slate-400 text-sm leading-normal">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── CTA SECTION ───────────────────── */

function CTASection() {
  return (
    <section className="section-spacing bg-gradient-to-b from-[#f2f9f9] to-[#edf6f6] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-emerald-100/40 to-transparent" />
      <div className="site-container max-w-5xl">
        <div className="relative bg-gradient-to-bl from-[#0a3f53] via-[#11708a] to-[#0a455a] rounded-[2rem] px-8 py-16 sm:px-12 md:px-20 md:py-20 text-center overflow-hidden shadow-2xl animate-gradient">
          {/* Background decorations */}
          <div className="absolute inset-0 geometric-pattern" />
          <div className="aurora-bg" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="text-5xl mb-8">📖</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8" style={{ lineHeight: 1.4 }}>
              ابدأ رحلتك الآن
            </h2>
            <p className="text-emerald-100/80 text-lg sm:text-xl mb-12 max-w-lg mx-auto leading-relaxed">
              احجز حصتك التجريبية المجانية اليوم وابدأ رحلة لا تنتهي مع كتاب
              الله
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link href="/register" className="glow-button inline-flex items-center justify-center bg-white text-[#0a4a5b] font-bold text-lg px-12 py-5 rounded-2xl hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 whitespace-nowrap">
                احجز حصتك المجانية
              </Link>
              <Link href="/chat" className="inline-flex items-center justify-center glass border border-emerald-200/25 text-white font-medium text-lg px-10 py-5 rounded-2xl hover:bg-white/15 transition-all whitespace-nowrap">
                تواصل معنا عبر واتساب
              </Link>
            </div>

            <p className="text-emerald-100/78 text-sm mt-6">
              بدون بطاقة ائتمان • إلغاء في أي وقت
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── FOOTER ───────────────────── */

function Footer() {
  return (
    <footer className="bg-[var(--ink-950)] text-white relative overflow-hidden" id="contact">
      <div className="aurora-bg" />
      <div className="absolute inset-0 geometric-pattern" />

      <div className="site-container relative z-10">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-emerald-500/20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <span className="text-white text-xl font-bold">ن</span>
              </div>
              <div>
                <span className="font-bold text-lg block leading-normal">أكاديمية النور</span>
                <span className="text-emerald-200/65 text-xs">Al-Noor Academy</span>
              </div>
            </div>
            <p className="text-emerald-100/60 text-sm leading-relaxed mb-6">
              منصة تعليمية متكاملة لتعلم القرآن الكريم والتجويد والتفسير مع نخبة
              من المعلمين المتخصصين.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {["فيسبوك", "تويتر", "يوتيوب", "واتساب"].map((s) => (
                <button key={s} className="w-10 h-10 rounded-xl glass border border-emerald-300/20 flex items-center justify-center text-emerald-100/70 hover:text-white hover:bg-white/10 transition-all text-xs">
                  {s[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white leading-normal">روابط سريعة</h4>
            <ul className="space-y-4">
              {[
                { label: "الرئيسية", href: "/" },
                { label: "خدماتنا", href: "#services" },
                { label: "باقات الأسعار", href: "#programs" },
                { label: "من نحن", href: "#about" },
                { label: "لوحة التحكم", href: "/admin" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-emerald-100/78 hover:text-emerald-200 transition-colors text-sm leading-relaxed block py-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white leading-normal">خدماتنا</h4>
            <ul className="space-y-4">
              {[
                { label: "دروس تحفيظ بالفيديو", href: "/tahfeez" },
                { label: "دروس أونلاين تجريبية", href: "/online-lessons" },
                { label: "تعليم اللغة العربية", href: "/arabic-language" },
                { label: "خدمة المحادثة", href: "/chat" },
                { label: "التجويد والتلاوة", href: "/tajweed" },
              ].map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="text-emerald-100/78 hover:text-emerald-200 transition-colors text-sm leading-relaxed block py-0.5">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white leading-normal">تواصل معنا</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl glass border border-emerald-300/20 flex items-center justify-center text-emerald-300 shrink-0">
                  📧
                </div>
                <div>
                  <p className="text-emerald-100/75 text-xs leading-relaxed">البريد الإلكتروني</p>
                  <p className="text-white text-sm leading-relaxed">info@alnoor-academy.com</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl glass border border-emerald-300/20 flex items-center justify-center text-emerald-300 shrink-0">
                  📱
                </div>
                <div>
                  <p className="text-emerald-100/75 text-xs leading-relaxed">الهاتف / واتساب</p>
                  <p className="text-white text-sm leading-relaxed" dir="ltr">+20 101 508 6381</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl glass border border-emerald-300/20 flex items-center justify-center text-emerald-300 shrink-0">
                  🕐
                </div>
                <div>
                  <p className="text-emerald-100/75 text-xs leading-relaxed">ساعات العمل</p>
                  <p className="text-white text-sm leading-relaxed">٢٤ ساعة / ٧ أيام</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-emerald-100/68 text-sm leading-normal">
            © {new Date().getFullYear()} أكاديمية النور. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-emerald-100/68 hover:text-emerald-200 transition-colors text-sm leading-normal whitespace-nowrap">
              سياسة الخصوصية
            </Link>
            <Link href="#" className="text-emerald-100/68 hover:text-emerald-200 transition-colors text-sm leading-normal whitespace-nowrap">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────── MAIN PAGE ───────────────────── */

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProgramsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
