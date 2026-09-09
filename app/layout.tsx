import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.getsellerstudio.com"),
  title: {
    default: "Seller Studio — Know what your shop actually makes",
    template: "%s — Seller Studio",
  },
  description:
    "Seller Studio brings Etsy sales, marketplace fees, product costs, expenses and refunds together so sellers can see real profit and make smarter decisions.",
  applicationName: "Seller Studio",
  alternates: { canonical: "/" },
  keywords: ["Etsy profit tracker", "Etsy seller analytics", "Etsy fees", "Etsy profit calculator", "seller dashboard", "Seller Studio"],
  openGraph: {
    title: "Seller Studio — Run your shop by profit",
    description: "Know what your shop actually makes. Track fees, costs, refunds and real profit in one place.",
    url: "https://www.getsellerstudio.com",
    siteName: "Seller Studio",
    type: "website",
    images: [{ url: "/seller-studio-og.png", width: 1200, height: 630, alt: "Seller Studio — Know what your shop actually makes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seller Studio — Run your shop by profit",
    description: "Know what your shop actually makes.",
    images: ["/seller-studio-og.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
