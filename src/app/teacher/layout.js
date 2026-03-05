import PortalNavbar from "@/components/portal-navbar";

const TEACHER_LINKS = [
  { label: "ركن القرآن", href: "/quran-and-sciences" },
  { label: "العربية لغير الناطقين", href: "/arabic-non-native" },
  { label: "المناهج الدراسية", href: "/egypt-gulf-curricula" },
];

export default function TeacherLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f8fbfb] via-[#f2f8f8] to-[#eef5f5]">
      <PortalNavbar sectionTitle="بوابة المعلمين" links={TEACHER_LINKS} ctaLabel="الرئيسية" ctaHref="/" />
      <div className="pt-24">{children}</div>
    </div>
  );
}
