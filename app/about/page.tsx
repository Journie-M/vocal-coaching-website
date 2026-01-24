import Image from "next/image";
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
import type { Metadata } from "next";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "About Journie Johnson | Los Angeles Vocal Coach & Voice Teacher",
  description:
    "Meet Journie Johnson, professional vocal coach in Los Angeles. Learn about her experience, teaching philosophy, and commitment to helping singers of all levels reach their goals.",
};

export default function AboutPage() {
  return (
    <div
      className={`min-h-[calc(100vh-4rem)] bg-white ${josefinSans.className}`}
    >
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6" style={{ color: "#065DDF" }}>
            About Journie
          </h1>
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-64 rounded-full overflow-hidden">
              <Image
                src="/JournieSmileHeadshot.png"
                alt="Journie Johnson - Vocal Coach Los Angeles"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-xl text-black">
          <section>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#065DDF" }}
            >
              Welcome to My Studio
            </h2>
            <p className="leading-relaxed">
              I&apos;m Journie Johnson, a professional vocal coach based in Los
              Angeles, California. My passion is helping singers of all levels
              discover and develop their unique voice. Whether you&apos;re just
              starting out or looking to refine your technique, I&apos;m here to
              guide you on your vocal journey.
            </p>
          </section>

          <section>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#065DDF" }}
            >
              My Teaching Philosophy
            </h2>
            <p className="leading-relaxed mb-4">
              Every voice is unique, and I believe in tailoring my teaching
              approach to each individual student. My goal is to create a
              supportive, encouraging environment where you feel comfortable
              exploring your voice and taking creative risks.
            </p>
            <p className="leading-relaxed">
              I focus on building strong vocal technique while keeping lessons
              fun and engaging. Together, we&apos;ll work on breath support,
              tone production, range expansion, and performance skills to help
              you become the confident singer you&apos;ve always wanted to be.
            </p>
          </section>

          <section>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#065DDF" }}
            >
              My Experience
            </h2>
            <p className="leading-relaxed mb-4">
              I have a lifetime of performance experience with a background in
              musical theater, and training from New York Vocal Coaching. I like
              to bring techniques in from acting to help my students connect
              emotionally with their music. Although my background is in musical
              theater, I enjoy teaching all styles and our lessons will be
              aligned with YOUR unique vocal goals!
            </p>
          </section>

          <section>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#065DDF" }}
            >
              What I Offer
            </h2>
            <ul className="space-y-3 list-disc list-inside leading-relaxed">
              <li>One-on-one vocal coaching sessions</li>
              <li>Technique development and vocal health</li>
              <li>Performance coaching and stage presence</li>
              <li>Song interpretation and style development</li>
              <li>Audition preparation</li>
              <li>Lessons for all skill levels - beginner to advanced</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#065DDF" }}
            >
              Location
            </h2>
            <p className="leading-relaxed">
              Vocal coaching and singing lessons are online, available to
              students from anywhere in the world. I am based in Los Angeles,
              California, where in-person lessons are coming soon!
            </p>
          </section>

          {/* CTA Section */}
          <section className="bg-gray-50 p-8 rounded-lg text-center mt-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#065DDF" }}
            >
              Ready to start your vocal journey?
            </h2>
            <p className="text-xl mb-6">
              Book your free introductory lesson today and discover what your
              voice can do!
            </p>
            <Link
              href="/book"
              className="inline-block px-8 py-4 text-2xl font-bold text-white transition-colors hover:opacity-80"
              style={{ backgroundColor: "#065DDF", borderRadius: "100px" }}
            >
              BOOK YOUR FREE LESSON
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
