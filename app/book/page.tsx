/* eslint-disable @next/next/no-sync-scripts */
import { Josefin_Sans } from "next/font/google";
import type { Metadata } from "next";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Book a Lesson | Journie Johnson Voice - Los Angeles Vocal Coach",
  description:
    "Schedule your singing lesson with Journie Johnson in Los Angeles. New students get a free introductory lesson. Book online now!",
};

export default function BookPage() {
  return (
    <div
      className={`min-h-[calc(100vh-4rem)] bg-white ${josefinSans.className}`}
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1
          className="text-5xl font-bold text-center mb-6"
          style={{ color: "#065DDF" }}
        >
          Book A Lesson
        </h1>
        <p className="text-2xl text-center text-black mb-12">
          Ready to start your vocal journey? Pick a session time below! New
          students can book a free introductory lesson by buying the
          &quot;Introductory Lesson&quot; package.
        </p>

        <iframe
          src="https://app.acuityscheduling.com/schedule.php?owner=38168764&ref=embedded_csp"
          title="Schedule Appointment"
          width="100%"
          height="800"
          frameBorder="0"
          allow="payment"
        ></iframe>
        <script
          src="https://embed.acuityscheduling.com/js/embed.js"
          type="text/javascript"
        ></script>
      </div>
    </div>
  );
}
