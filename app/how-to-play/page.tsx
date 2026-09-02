import type { Metadata } from "next"
import h1 from "@/public/h1.png"
import h2 from "@/public/h2.png"
import h3 from "@/public/h3.png"
import h4 from "@/public/h4.png"
import { RiArrowDownLongLine } from "@remixicon/react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "How to Play Math Puzzles",

  description:
    "Learn how to play Math Puzzles. Read number sequences, find hidden patterns, enter your answer, and progress through challenging math puzzle levels.",

  alternates: {
    canonical: "https://mathpuzzle.fun/how-to-play",
  },

  openGraph: {
    type: "article",

    url: "https://mathpuzzle.fun/how-to-play",

    title: "How to Play Math Puzzles",

    description:
      "Learn the rules of Math Puzzles and discover how to solve number sequence puzzles.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "How to Play Math Puzzles",
      },
    ],
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",

  "@type": "HowTo",

  name: "How to Play Math Puzzles",

  description:
    "Learn how to solve number sequence puzzles in Math Puzzles.",

  totalTime: "PT5M",

  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Read the Sequence",
      text:
        "Look at the number sequence carefully and examine the numbers shown in the puzzle.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Find the Pattern",
      text:
        "Find the logic or mathematical rule behind the numbers in the sequence.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Enter Your Answer",
      text:
        "Type the missing or correct answer using the keyboard.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Check and Continue",
      text:
        "Submit your answer and continue to the next level.",
    },
  ],
};

export default function page(){
    return(
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
            __html: JSON.stringify(howToJsonLd),
            }}
        />
        <section className="min-h-[500px] rounded-2xl border-[2px] border-[#3a5990] 
        p-5 pb-10 
        max-w-md my-5 mx-auto">
            <article className="flex flex-col items-center">
            <h1 className="mt-5 text-2xl font-bold text-white uppercase">How to Play Math Puzzles</h1>
            <div className="w-[60px] h-[4px] bg-[#f9eb10] mt-3 mb-6"/>

            <Image src={h1} alt="" className="mt-3 w-23"/>
            <h3 className="text-xl font-semibold text-white mt-3">Read the Sequence</h3>
            <p className="text-lg text-white">Look at the number sequence carefully.</p>

            <RiArrowDownLongLine className="text-white size-10 mt-5"/>

            <Image src={h2} alt="" className="mt-5 w-23"/>
            <h3 className="text-xl font-semibold text-white mt-3">Find the Pattern</h3>
            <p className="text-lg text-white">Find the logic or rule behind the numbers.</p>

            <RiArrowDownLongLine className="text-white size-10 mt-5"/>

            <Image src={h3} alt="" className="mt-5 w-23"/>
            <h3 className="text-xl font-semibold text-white mt-3">Enter Your Answer</h3>
            <p className="text-lg text-white">Type your answer using the keyboard.</p>

            <RiArrowDownLongLine className="text-white size-10 mt-5"/>

            <Image src={h4} alt="" className="mt-5 w-23"/>
            <h3 className="text-xl font-semibold text-white mt-3">Check & Continue</h3>
            <p className="text-lg text-white">Submit your answer and move to the next level!</p>
            </article>
        </section>
        </>
    )
}