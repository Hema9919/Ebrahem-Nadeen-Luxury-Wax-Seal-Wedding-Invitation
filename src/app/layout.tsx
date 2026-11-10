import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ebrahem-nadeen.wedding"),
  title: "إبراهيم & نادين — دعوة حفل زفاف ",
  description:
    "يتشرف الأستاذ محمد إبراهيم الدسوقي والأستاذ محمود سامي صالح بدعوتكم لحضور حفل زفاف إبراهيم & نادين يوم الأربعاء 18 نوفمبر 2026 في سولتير - نادي القضاة، رأس البر.",
  keywords: [
    "إبراهيم & نادين",
    "دعوة زفاف",
    "زفاف إبراهيم ونادين",
    "دعوة فرح",
    "سولتير نادي القضاة",
    "رأس البر",
  ],
  authors: [{ name: "Ebrahem & Nadeen" }],
  openGraph: {
    title: "إبراهيم & نادين — دعوة حفل زفاف ملكية",
    description: "الأربعاء 18 نوفمبر 2026 • سولتير - نادي القضاة، رأس البر",
    type: "website",
    locale: "ar_EG",
    images: [
      {
        url: "/assets/couple.png",
        width: 800,
        height: 1000,
        alt: "دعوة زفاف إبراهيم & نادين",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700&family=Cairo:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0B0B0B] text-[#F8F5EF] antialiased min-h-screen selection:bg-[#C6A15B] selection:text-[#0B0B0B]">
        {children}
      </body>
    </html>
  );
}
