"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Understanding Music Theory",
    description:
      "Music theory is the study of the practices and possibilities of music. It helps you understand the structure of music, including scales, chords, and rhythm. A solid grasp of music theory can enhance your ability to compose and perform.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
        Understanding Music Theory
      </div>
    ),
  },
  {
    title: "Practicing Regularly",
    description:
      "Consistent practice is essential for mastering any musical instrument or vocal technique. Establishing a daily routine helps build muscle memory and improves your skills over time. Remember, quality practice is more important than quantity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--yellow-500))] flex items-center justify-center text-white">
        Practicing Regularly
      </div>
    ),
  },
  {
    title: "Listening Actively",
    description:
      "Active listening involves paying close attention to music, analyzing its components, and understanding its emotional impact. By listening to various genres and styles, you can develop a deeper appreciation for music and enhance your own musicality.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--orange-400))] flex items-center justify-center text-white">
        Listening Actively
      </div>
    ),
  },
  {
    title: "Exploring Different Genres",
    description:
      "Exploring various musical genres broadens your horizons and exposes you to new sounds and techniques. Each genre has its unique characteristics that can inspire your creativity and influence your own musical style.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--lime-500))] flex items-center justify-center text-white">
        Exploring Different Genres
      </div>
    ),
  },
];


function WhyChooseUs() {
  return <div className="scroll-smooth">
    <StickyScroll content={content} />
  </div>;
}

export default WhyChooseUs;
