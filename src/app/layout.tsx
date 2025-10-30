import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Static metadata with fallback values
export const metadata: Metadata = {
  title: "The Dutch Queen | Official Website",
  description:
    "Official website of The Dutch Queen - Europe's Premier Queen Tribute Band",
  keywords: ["Queen", "tribute band", "live music", "Dutch Queen"],
  openGraph: {
    title: "The Dutch Queen | Official Website",
    description:
      "Official website of The Dutch Queen - Europe's Premier Queen Tribute Band",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Dutch Queen | Official Website",
    description:
      "Official website of The Dutch Queen - Europe's Premier Queen Tribute Band",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${inter.variable} overflow-x-hidden bg-black font-sans text-white antialiased`}
      >
        <Navigation />
        <main className="min-h-screen overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
