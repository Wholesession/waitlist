import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Wholesession - The wait is part of the journey",
  description: "Master advanced STEM skills in small cohorts. Join the waitlist for Wholesession.",
  openGraph: {
    title: "Wholesession - The wait is part of the journey",
    description: "Master advanced STEM skills in small cohorts. Join the waitlist for Wholesession.",
    type: "website",
    locale: "en_US",
    siteName: "Wholesession",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wholesession - The wait is part of the journey",
    description: "Master advanced STEM skills in small cohorts. Join the waitlist for Wholesession.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
