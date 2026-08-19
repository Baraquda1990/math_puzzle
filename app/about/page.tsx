import type { Metadata } from "next"
import Link from "next/link"
import a1 from "@/public/a1.png"
import p1 from "@/public/p1.png"
import p2 from "@/public/p2.png"
import p3 from "@/public/p3.png"

export const metadata: Metadata = {
  title: "About Math Genius",

  description:
    "Learn more about Math Genius, a fun math puzzle game based on number sequences, patterns, and increasingly challenging levels.",

  alternates: {
    canonical: "https://mathpuzzle.fun/about",
  },

  openGraph: {
    type: "article",
    url: "https://mathpuzzle.fun/about",

    title: "About Math Genius",

    description:
      "Discover Math Genius, a fun online math puzzle game with challenging number sequences and progressive levels.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Math Genius",
      },
    ],
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",

  "@type": "AboutPage",

  name: "About Math Genius",

  url: "https://mathpuzzle.fun/about",

  description:
    "Learn more about Math Genius and its math puzzle gameplay.",

  isPartOf: {
    "@type": "WebSite",
    name: "Math Genius",
    url: "https://mathpuzzle.fun/",
  },
};

import Image from "next/image"
export default function page(){
    return(
    <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
            __html: JSON.stringify(aboutJsonLd),
            }}
        />
        <section className="min-h-[500px] rounded-2xl border-[2px] border-[#3a5990] p-5 pb-10
        max-w-md my-5 mx-auto">
        <article>
            <div className="flex flex-col items-center">
                <h2 className="mt-5 text-2xl font-bold text-white uppercase">about the game</h2>
                <div className="w-[60px] h-[4px] bg-[#f9eb10] mt-3 mb-6"/>
                <Image src={a1} alt="about the game" />
            </div>
            <p className="text-white text-lg/6 mt-5">
                Math Genius is a fun and addictive math puzzle game designed for all ages.
                Solve number sequences, patterns and equations to advance through levels and become a true math genius!
            </p>
            <div className="mt-10 flex text-white text-xl">
                <Image src={p1} alt="Challenging Puzzles" className="w-15 h-15"/>
                <div className="ml-3">
                    <h3 className="text-xl font-semibold">Challenging Puzzles</h3>
                    <p className="text-lg">Lots of unique math puzzles to solve.</p>
                </div>
            </div>        
            <div className="mt-5 flex text-white text-xl">
                <Image src={p2} alt="Progressive Levels" className="w-15 h-15"/>
                <div className="ml-3">
                    <h3 className="text-xl font-semibold">Progressive Levels</h3>
                    <p className="text-lg">Levels get harder as you improve.</p>
                </div>
            </div>
            <div className="mt-5 flex text-white text-xl">
                <Image src={p3} alt="Compete & Rank" className="w-15 h-15"/>
                <div className="ml-3">
                    <h3 className="text-xl font-semibold">Compete & Rank</h3>
                    <p className="text-lg">Climb the leaderboard and challenge others!</p>
                </div>
            </div>
            <div className="mt-8 text-center">
            <Link
              href="/"
              className="text-white font-bold underline"
            >
              Play Math Genius
            </Link>
          </div>
        </article>
        </section>
    </>
    )
}