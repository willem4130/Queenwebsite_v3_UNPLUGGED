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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "The Dutch Queen Unplugged | Queen Tribute Band | Nederland",
  description:
    "De iconische nummers van Queen in een intieme, akoestische setting. The Dutch Queen Unplugged brengt een eerbetoon aan de tijdloze muziek van Queen.",
  keywords: [
    "Queen tribute",
    "tribute band",
    "Queen coverband",
    "The Dutch Queen",
    "The Dutch Queen Unplugged",
    "akoestisch",
    "unplugged",
    "live muziek",
    "rock band",
    "Nederland",
    "Bohemian Rhapsody",
    "Freddie Mercury tribute",
    "kerkconcert",
    "akoestische Queen",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: SITE_URL,
    siteName: "The Dutch Queen Unplugged",
    title: "The Dutch Queen Unplugged | Queen Tribute Band",
    description:
      "De iconische nummers van Queen in een intieme, akoestische setting. The Dutch Queen Unplugged brengt een eerbetoon aan de tijdloze muziek van Queen.",
    images: [
      {
        url: "/videos/poster-desktop.jpg",
        width: 1920,
        height: 1080,
        alt: "The Dutch Queen Unplugged - Akoestische Queen Tribute Band",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Dutch Queen Unplugged | Queen Tribute Band",
    description:
      "De iconische nummers van Queen in een intieme, akoestische setting. The Dutch Queen Unplugged brengt Queen tot leven.",
    images: ["/videos/poster-desktop.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="overflow-x-hidden">
      <head>
        {/* Structured Data - MusicGroup (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              name: "The Dutch Queen Unplugged",
              url: SITE_URL,
              image: `${SITE_URL}/videos/poster-desktop.jpg`,
              description:
                "De iconische nummers van Queen in een intieme, op MTV Unplugged geïnspireerde, akoestische setting. Tributeband The Dutch Queen Unplugged brengt een eerbetoon aan de tijdloze muziek van Queen.",
              genre: ["Rock", "Acoustic", "Queen Tribute"],
              foundingDate: "2024",
              foundingLocation: {
                "@type": "Place",
                name: "Nederland",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61556052640523",
                "https://www.instagram.com/thedutchqueenunplugged/",
                "https://www.youtube.com/watch?v=VCv3TxE81uk",
              ],
              member: [
                {
                  "@type": "Person",
                  name: "Merijn van Haren",
                  roleName: "Vocals",
                },
                {
                  "@type": "Person",
                  name: "Kees Lewiszong",
                  roleName: "Gitaar, Vocals",
                },
                {
                  "@type": "Person",
                  name: "Henk Jan Heuvelink",
                  roleName: "Piano, Vocals",
                },
              ],
            }),
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
