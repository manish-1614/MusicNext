"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
  {
    title: "Mastering the Art of Jazz Improvisation",
    description:
      "Join renowned jazz pianist Emily Carter for an in-depth webinar on developing your improvisation skills and crafting unique solos.",
    date: "2025-01-15",
    time: "6:00 PM - 7:30 PM",
    link: "https://musicacademy.com/webinars/jazz-improvisation",
  },
  {
    title: "Vocal Techniques for Contemporary Singers",
    description:
      "Learn essential vocal techniques for pop, rock, and R&B genres with vocal coach Alex Rivera. Perfect for aspiring and professional singers alike.",
    date: "2025-01-20",
    time: "4:00 PM - 5:30 PM",
    link: "https://musicacademy.com/webinars/vocal-techniques",
  },
  {
    title: "Music Production Basics with Logic Pro",
    description:
      "Discover the fundamentals of music production and how to create your first track using Logic Pro with producer and engineer Mark Sanchez.",
    date: "2025-01-25",
    time: "5:00 PM - 6:30 PM",
    link: "https://musicacademy.com/webinars/music-production",
  },
  {
    title: "Exploring Classical Guitar Repertoire",
    description:
      "Classical guitarist Sarah Thompson shares insights into iconic pieces and techniques to elevate your performance.",
    date: "2025-01-30",
    time: "3:00 PM - 4:30 PM",
    link: "https://musicacademy.com/webinars/classical-guitar",
  },
  {
    title: "The Evolution of Music Theory in Modern Composing",
    description:
      "Join Dr. Adrian Lee in exploring how modern composers adapt traditional music theory principles to create innovative works.",
    date: "2025-02-05",
    time: "7:00 PM - 8:30 PM",
    link: "https://musicacademy.com/webinars/music-theory",
  },
];

function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* top part  */}
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance your musical journey
          </p>
        </div>

        {/* card hover effect related part  */}
        <div className="mt-10">
          {/* card hover effect related part  */}
          <HoverEffect items={projects} />
        </div>

        {/* bottom part  */}
        <div className="mt-10 text-center">
          <Link
            href={"/webinars"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
