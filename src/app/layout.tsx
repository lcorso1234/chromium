import type { Metadata } from "next";
import Script from "next/script";
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
    default: "Chromium Industries LLC | Chicago Roll Engineering & Surface Solutions",
    template: "%s | Chromium Industries LLC",
  },
  description:
    "Chromium Industries LLC delivers Chicago-based industrial chrome plating, cylindrical grinding, thermal spray coatings, and full roll refurbishment that keeps North American production lines running smoothly.",
  keywords: [
    "Chromium Industries",
    "Chromium Industries LLC",
    "Chicago chrome plating",
    "chrome plating in Chicago",
    "cylindrical grinding Chicago",
    "thermal spray coatings Chicago",
    "roll manufacturing Chicago",
    "industrial roll repair Chicago",
    "roll refurbishment Illinois",
    "precision roll engineering Chicago",
  ],
  authors: [{ name: "Chromium Industries LLC" }],
  openGraph: {
    title: "Chromium Industries LLC | Chicago Roll Engineering & Surface Solutions",
    description:
      "Partner with Chromium Industries LLC for chrome plating in Chicago, thermal spray coatings, cylindrical grinding, and turnkey roll engineering backed by 70+ years of expertise.",
    url: "https://www.chromiumind.com",
    siteName: "Chromium Industries LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/gallery/home-top-bg.png",
        width: 1600,
        height: 900,
        alt: "Chromium Industries LLC roll engineering facility in Chicago, Illinois",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chromium Industries LLC | Chicago Roll Engineering & Surface Solutions",
    description:
      "Explore chrome plating, cylindrical grinding, and thermal spray coatings delivered by Chromium Industries LLC in Chicago, IL.",
    creator: "@ChromiumInd",
    images: [
      {
        url: "/gallery/home-top-bg.png",
        alt: "Chromium Industries LLC team delivering roll services in Chicago",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "US-IL",
    "geo.placename": "Chicago",
    "geo.position": "41.890248;-87.743269",
    ICBM: "41.890248, -87.743269",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png", sizes: "192x192" },
    ],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "IndustrialService",
  "@id": "https://www.chromiumind.com/#localBusiness",
  name: "Chromium Industries LLC",
  alternateName: "Chromium Industries",
  url: "https://www.chromiumind.com",
  description:
    "Chromium Industries LLC provides chrome plating in Chicago, cylindrical grinding, thermal spray coatings, and precision roll engineering for manufacturers across the Midwest.",
  telephone: "+1-773-287-3716",
  email: "sales@chromiumind.com",
  priceRange: "$$$",
  image: [
    "https://www.chromiumind.com/gallery/home-top-bg.png",
    "https://www.chromiumind.com/gallery/plating-top-bg.png",
  ],
  logo: "https://chromiumind.com/wp-content/uploads/2019/01/logo.png",
  sameAs: [
    "https://www.linkedin.com/company/chromium-industries",
    "https://www.facebook.com/ChromiumIndustries",
    "https://twitter.com/ChromiumInd",
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Chicago",
      sameAs: "https://en.wikipedia.org/wiki/Chicago",
    },
    {
      "@type": "State",
      name: "Illinois",
      sameAs: "https://en.wikipedia.org/wiki/Illinois",
    },
    {
      "@type": "Country",
      name: "United States",
      sameAs: "https://en.wikipedia.org/wiki/United_States",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "4645 West Chicago Ave.",
    addressLocality: "Chicago",
    addressRegion: "IL",
    postalCode: "60651",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.890248,
    longitude: -87.743269,
  },
  foundingDate: "1955",
  hasMap: "https://maps.google.com/?q=Chromium+Industries+Chicago",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:00",
      closes: "12:00",
    },
  ],
  makesOffer: [
    { "@type": "Offer", name: "Chrome Plating in Chicago" },
    { "@type": "Offer", name: "Cylindrical Grinding in Chicago" },
    { "@type": "Offer", name: "Thermal Spray Coatings in Chicago" },
    { "@type": "Offer", name: "Roll Manufacturing and Fabrication in Chicago" },
    { "@type": "Offer", name: "Inspection and Quality Services in Chicago" },
  ],
  knowsAbout: [
    "industrial chrome plating",
    "cylindrical grinding",
    "thermal spray coatings",
    "roll manufacturing",
    "roll refurbishment",
    "inspection and quality assurance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}>
        <Script id="chromium-industries-ld-json" type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </Script>
        {children}
      </body>
    </html>
  );
}
