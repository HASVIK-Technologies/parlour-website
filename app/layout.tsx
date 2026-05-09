import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glow Beauty Salon - Premium Beauty & Wellness Experience",
  description: "Experience luxury beauty services at Glow Beauty Salon. From premium hair styling to bridal makeup, discover elegance and transformation in Bangalore.",
  keywords: "beauty salon, hair styling, facial treatment, bridal makeup, body waxing, luxury salon, Bangalore",
  openGraph: {
    title: "Glow Beauty Salon - Premium Beauty & Wellness Experience",
    description: "Experience luxury beauty services at Glow Beauty Salon. From premium hair styling to bridal makeup, discover elegance and transformation in Bangalore.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
