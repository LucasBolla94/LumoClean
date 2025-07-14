import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter font (clean, professional and readable)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Lumo Clean - Premium Cleaners in Glasgow & Edinburgh",
  description:
    "Lumo Clean offers premium residential and business cleaning services in Glasgow, Edinburgh, and surrounding areas. High-quality, reliable, and detail-oriented cleaners.",
  keywords: [
    "cleaners glasgow",
    "cleaners edinburgh",
    "professional cleaning",
    "business cleaning",
    "residential cleaning",
    "deep cleaning glasgow",
    "deep cleaning edinburgh",
    "lumo clean",
  ],
  authors: [{ name: "Lumo Clean" }],
  icons: {
    icon: "/shield.png",
  },
  robots: "index, follow",
};

// Viewport config moved to separate export (✅ correct way)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-white text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
