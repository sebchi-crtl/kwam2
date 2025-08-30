import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import Banner from "@/app/_components/home/Banner";
import Navbar from "@/components/Navbar";
import Hero from "@/app/_components/home/Hero";
import Feature from "@/app/_components/home/Feature";
import Portfolio from "@/app/_components/home/Portfolio";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KWAM 2 - Unlock the potential",
  description: "KWAM 2 - Coming Soon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} antialiased`}
      >
        <div className="min-h-screen bg-white mt-5">
          <Navbar />
          <main className="pt-16">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
