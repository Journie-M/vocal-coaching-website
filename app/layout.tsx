import type { Metadata } from "next";
import { Geist, Geist_Mono, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Journie Johnson Voice | Vocal Coaching & Singing Lessons Los Angeles",
  description: "Professional vocal coaching and singing lessons in Los Angeles. Work with experienced voice teacher Journie Johnson. All levels welcome. Book your free lesson today!",
  keywords: "vocal coaching los angeles, singing lessons los angeles, voice teacher, vocal coach, singing lessons near me, voice lessons LA, vocal training",
  openGraph: {
    title: "Journie Johnson Voice | Vocal Coaching Los Angeles",
    description: "Professional vocal coaching and singing lessons in Los Angeles. All levels welcome.",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} ${josefinSans.variable} antialiased bg-white`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
