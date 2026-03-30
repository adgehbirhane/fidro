import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GoToTop } from "@/components/go-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Fidro | Transform Your Fitness Business",
  description: "Fidro is a comprehensive fitness and gym management system designed to streamline operations, boost member engagement, and maximize revenue.",
  keywords: ["fitness management", "gym software", "member management", "gym billing", "attendance tracking", "fitness center software"],
  authors: [{ name: "Fidro Team" }],
  manifest: '/manifest.json',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Fidro | Transform Your Fitness Business",
    description: "The all-in-one platform to streamline your gym operations and boost member engagement.",
    url: "https://fidro.com",
    siteName: "Fidro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fidro | Transform Your Fitness Business",
    description: "The all-in-one platform to streamline your gym operations and boost member engagement.",
    images: ["/og-image.jpg"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <GoToTop />
      </body>
    </html>
  );
}
