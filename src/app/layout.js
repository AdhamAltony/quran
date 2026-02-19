import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "مشاعل المعرفة | منصة تعليمية متكاملة",
  description:
    "مشاعل المعرفة منصة تعليمية تهدف لصناعة جيل يجيد لغته ويحفظ كتاب ربه ويواكب عصره.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} antialiased`}>{children}</body>
    </html>
  );
}
