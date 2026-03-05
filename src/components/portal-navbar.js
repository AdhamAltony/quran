import Link from "next/link";

export default function PortalNavbar({ sectionTitle, links = [], ctaLabel = "الصفحة الرئيسية", ctaHref = "/" }) {
  return (
    <nav className="fixed right-0 left-0 top-0 z-50" dir="rtl">
      <div className="nav-surface shadow-[0_12px_36px_-16px_rgba(4,16,31,0.85)]">
        <div className="site-container">
          <div className="flex min-h-[4.5rem] items-center justify-between gap-4">
            <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
              <div className="icon-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-xl font-bold text-white shadow-lg shadow-emerald-500/30 sm:h-12 sm:w-12">
                م
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="truncate whitespace-nowrap text-base font-bold text-white sm:text-lg">مشاعل المعرفة</span>
                <span className="hidden text-xs text-emerald-200/80 sm:block">{sectionTitle}</span>
              </div>
            </Link>

            <div className="hidden items-center gap-2 lg:flex xl:gap-3">
              {links.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link-pill">
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href={ctaHref}
              className="glow-button inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-l from-emerald-500 to-emerald-600 px-4 py-2.5 text-xs font-bold text-white transition-all hover:-translate-y-0.5 hover:from-emerald-400 hover:to-emerald-500 sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
