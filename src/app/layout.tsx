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
  metadataBase: new URL("https://www.chromiumind.com"),
  title: {
    default: "Chromium Industries | Precision Roll Engineering & Surface Solutions",
    template: "%s | Chromium Industries",
  },
  description:
    "Chromium Industries delivers precision roll engineering, industrial chrome plating, thermal spray coatings, and complete roll refurbishment services for packaging, plastics, and converting manufacturers.",
  keywords: [
    "roll engineering",
    "precision roll services",
    "industrial chrome plating",
    "thermal spray coatings",
    "cylindrical grinding",
    "roll refurbishment",
    "Chromium Industries",
    "surface finishing",
  ],
  authors: [{ name: "Chromium Industries" }],
  openGraph: {
    title: "Chromium Industries | Precision Roll Engineering & Surface Solutions",
    description:
      "Partner with Chromium Industries for world-class roll engineering, chrome plating, grinding, and coating services that keep production lines running flawlessly.",
    url: "https://www.chromiumind.com",
    siteName: "Chromium Industries",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chromium Industries | Precision Roll Engineering & Surface Solutions",
    description:
      "Explore roll engineering, chrome plating, and thermal spray services engineered to deliver flawless surface performance.",
    creator: "@ChromiumInd",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
