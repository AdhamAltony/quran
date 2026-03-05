import PortalNavbar from "@/components/portal-navbar";

const ADMIN_LINKS = [
  { label: "لوحة الإدارة", href: "/admin/dashboard" },
  { label: "ركن القرآن", href: "/quran-and-sciences" },
  { label: "مركز الدورات", href: "/courses-center" },
];

export default function AdminLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f7fbfb] via-[#eef6f6] to-[#e8f2f2]">
      <PortalNavbar sectionTitle="بوابة الإدارة" links={ADMIN_LINKS} ctaLabel="الرئيسية" ctaHref="/" />
      <div className="pt-24">{children}</div>
    </div>
  );
}
