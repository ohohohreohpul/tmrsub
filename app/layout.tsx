import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const font = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tomorrow's Claude Cowork Camp",
  description:
    "4 วัน สร้าง AI Workflows ที่ช่วยให้คุณทำงาน สร้างคอนเทนต์ และต่อยอดรายได้ออนไลน์ได้จริง",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${font.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
