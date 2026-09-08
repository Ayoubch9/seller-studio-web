import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seller Studio — Run your shop by profit",
  description:
    "Seller Studio brings sales, Etsy fees, product costs, expenses and refunds together so online sellers can see real profit and make smarter decisions.",
  metadataBase: new URL("https://sellerstudio.app"),
  openGraph: {
    title: "Seller Studio — Run your shop by profit",
    description: "Know what your shop actually makes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}<Analytics /><SpeedInsights /></body>
    </html>
  );
}
