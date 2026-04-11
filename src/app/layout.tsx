import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import CursorFollower from "@/components/CursorFollower";
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
  metadataBase: new URL("https://michaelkasion.ru"),
  title: "Michael K. | Frontend Developer",
  description: "Interactive portfolio of a Next.js & React developer specializing in modern web applications.",
  openGraph: {
    title: "Michael K. | Frontend Developer",
    description: "Interactive portfolio showcasing Next.js, React & TypeScript projects.",
    type: "website",
    url: "https://michaelkasion.ru/",
    siteName: "Michael K. Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Michael K. - Frontend Developer Portfolio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael K. | Frontend Developer",
    description: "Interactive portfolio showcasing Next.js, React & TypeScript projects.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white`}
      >
        <Navbar />
        <CursorFollower />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
