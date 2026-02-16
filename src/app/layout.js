import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "أكاديمية النور | تعلم القرآن الكريم أونلاين",
  description:
    "أكاديمية النور - منصة تعليمية متكاملة لتعلم القرآن الكريم والتجويد والتفسير مع نخبة من المعلمين المتخصصين",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} antialiased`}>{children}</body>
    </html>
  );
}
