import PortalNavbar from "@/components/portal-navbar";

const AUTH_LINKS = [
  { label: "تسجيل الدخول", href: "/auth/login" },
  { label: "بوابة الطالب", href: "/student/dashboard" },
  { label: "بوابة الإدارة", href: "/admin/dashboard" },
];

export default function LoginLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f8fbfb] via-[#f1f8f8] to-[#edf6f6]">
      <PortalNavbar sectionTitle="بوابة الدخول" links={AUTH_LINKS} ctaLabel="الصفحة الرئيسية" ctaHref="/" />
      <div className="pt-24">{children}</div>
    </div>
  );
}
