import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AnalyticsProvider } from "@/providers/AnalyticsProvider";
import { CookieConsent } from "@/components/CookieConsent";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const SITE_URL = "https://queenunplugged.nl";
const API_URL =
  "https://dutch-queen-admin.vercel.app/api/bands/the-dutch-queen-unplugged";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

async function fetchSeoData() {
  try {
    const res = await fetch(API_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const data = await res.json();
    return data.profile?.seo || null;
  } catch {
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const seo = await fetchSeoData();
  const home = seo?.pages?.home || {};
  const defaults = seo?.defaults || {};
  const geo = seo?.geographic || {};

  const title = home.metaTitle || seo?.metaTitle || "The Dutch Queen Unplugged";
  const description =
    home.metaDescription ||
    seo?.metaDescription ||
    "De iconische nummers van Queen in een intieme, akoestische setting. The Dutch Queen Unplugged brengt een eerbetoon aan de tijdloze muziek van Queen.";
  const ogImage = home.ogImage || defaults.ogImage || "/videos/poster-desktop.jpg";
  const keywords = [
    ...(seo?.keywords || []),
    ...(home.keywords || []),
  ].filter((k, i, arr) => arr.indexOf(k) === i);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: "%s | The Dutch Queen Unplugged",
    },
    description,
    keywords,
    alternates: {
      canonical: home.canonicalUrl || SITE_URL,
    },
    openGraph: {
      type: "website",
      locale: geo.primaryLocale?.replace("-", "_") || "nl_NL",
      url: SITE_URL,
      siteName: "The Dutch Queen Unplugged",
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1920,
          height: 1080,
          alt: "The Dutch Queen Unplugged - Akoestische Queen Tribute Band",
        },
      ],
    },
    twitter: {
      card: (defaults.twitterCard as "summary_large_image") || "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: !home.noIndex,
      follow: !home.noFollow,
      googleBot: {
        index: !home.noIndex,
        follow: !home.noFollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const seo = await fetchSeoData();
  const musicGroup = seo?.structuredData?.musicGroup || {};
  const org = seo?.structuredData?.organization || {};
  const description =
    seo?.metaDescription ||
    "De iconische nummers van Queen in een intieme, akoestische setting. The Dutch Queen Unplugged brengt een eerbetoon aan de tijdloze muziek van Queen.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: musicGroup.name || "The Dutch Queen Unplugged",
    url: org.url || SITE_URL,
    image: `${SITE_URL}${seo?.defaults?.ogImage || "/videos/poster-desktop.jpg"}`,
    description,
    genre: musicGroup.genre || ["Rock", "Acoustic", "Queen Tribute"],
    foundingDate: musicGroup.foundingDate || "2024",
    foundingLocation: {
      "@type": "Place",
      name: musicGroup.foundingLocation || "Nederland",
    },
    sameAs: org.sameAs || [],
    member: (musicGroup.members || []).map(
      (m: { name: string; role: string }) => ({
        "@type": "Person",
        name: m.name,
        roleName: m.role,
      }),
    ),
  };

  return (
    <html lang="nl" className="overflow-x-hidden">
      <head>
        {/* Structured Data - MusicGroup (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${inter.variable} overflow-x-hidden bg-black font-sans text-white antialiased`}
      >
        <AnalyticsProvider>
          <Navigation />
          <main className="min-h-screen overflow-x-hidden">{children}</main>
          <Footer />
          <CookieConsent />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
