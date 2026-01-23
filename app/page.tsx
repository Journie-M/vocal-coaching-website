import Image from "next/image";
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
import type { Metadata } from "next";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Journie Johnson Voice | Vocal Coach & Singing Teacher Los Angeles",
  description: "Professional vocal coaching in Los Angeles. Experienced voice teacher offering singing lessons for all levels. Transform your voice. Book your free introductory lesson today!",
};

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-4rem)] bg-white">
      {/* Image - Mobile: circular and small, Desktop: left side */}
      <div className="flex justify-center items-center py-8 md:py-0 md:relative md:w-1/2 md:bg-white">
        <div className="relative w-48 h-48 md:w-full md:h-full">
          <Image
            src="/JournieSmileHeadshot.png"
            alt="Journie Johnson"
            fill
            className="object-cover md:object-contain rounded-full md:rounded-none md:object-left"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex w-full md:w-1/2 items-center justify-center bg-white px-4 ${josefinSans.className}`}
      >
        <div className="p-8 max-w-xl">
          <h2 className="text-4xl font-bold mb-6" style={{ color: "#065DDF" }}>
            I&apos;m Journie, your new voice teacher!
          </h2>
          <p className="text-3xl text-black mb-8">
            I work with singers of all levels to unlock their true vocal
            potential. Book with me to start your singing journey today!
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link
              href="/book"
              className="inline-block px-8 py-4 text-2xl font-bold text-white transition-colors hover:opacity-80"
              style={{ backgroundColor: "#065DDF", borderRadius: "100px" }}
            >
              BOOK A FREE LESSON
            </Link>
            <Link
              href="/about"
              className="text-2xl transition-colors hover:text-black"
              style={{ color: "#065DDF" }}
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
