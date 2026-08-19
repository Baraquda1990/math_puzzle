import type { Metadata } from "next";
import Link from "next/link"
import {RiPlayLargeFill} from "@remixicon/react"
import Image from "next/image"
import logoBig from"@/public/logoBig.png"
export const metadata: Metadata = {
  title: "Math Genius - Play Math Puzzle Online",

  description:
    "Play Math Genius online for free. Solve number sequences, find hidden patterns, complete challenging levels, and test your mathematical skills.",

  alternates: {
    canonical: "https://mathpuzzle.fun/",
  },

  openGraph: {
    type: "website",

    url: "https://mathpuzzle.fun/",

    title: "Math Genius - Play Math Puzzle Online",

    description:
      "Solve number sequences and discover patterns in Math Genius, a fun online math puzzle game.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Math Genius - Math Puzzle Game",
      },
    ],
  },
};

const gameJsonLd = {
  "@context": "https://schema.org",

  "@type": "VideoGame",

  name: "Math Genius",

  description:
    "A free online math puzzle game where players solve number sequences, find patterns, and complete challenging levels.",

  url: "https://mathpuzzle.fun/",

  genre: [
    "Puzzle",
    "Math",
    "Logic",
    "Educational",
  ],

  gamePlatform: "Web browser",

  applicationCategory: "Game",

  operatingSystem: "Any",

  inLanguage: "en",

  isAccessibleForFree: true,

  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },

  publisher: {
    "@type": "Organization",
    name: "Math Genius",
    url: "https://mathpuzzle.fun/",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(gameJsonLd),
        }}
      />
    <section className="flex-1 flex flex-col rounded-2xl border-[2px] 
      border-[#3a5990] max-w-md min-[2000px]:max-w-[1280px] my-5 mx-auto
      bg-[#068fff]">
      <div className="flex h-full flex-col items-center justify-around m-5 text-center">
        <Image src={logoBig} alt="Math Genius" className="mt-4"/>
        <h1 className="sr-only text-2xl font-bold text-center">Math Genius - Play Math Puzzle Online</h1>
        <div className="px-2 text-white">
            <h2 className="text-3xl font-bold text-center">
                Math Puzzle Game
            </h2>
            <h3 className="mt-3 text-xl text-white text-center font-bold">Sharpen your mind with fun math puzzles!</h3>

            <p className="mt-3 text-lg leading-7">
                Math Genius is a fun online math puzzle game based on
                number sequences and patterns. Look at the numbers,
                find the hidden rule, and solve each puzzle.
            </p>

            <p className="mt-3 text-lg leading-7">
                Play Math Genius for free in your browser and challenge
                your mathematical and logical thinking skills.
            </p>
        </div>
        <Link className="mt-10 text-xl font-bold w-full mb-3 py-4 rounded-xl flex justify-center max-w-[500px]
            bg-[#f6e001] text-[#022a6c] hover:bg-white " href="/play">
            <RiPlayLargeFill />Play Now
        </Link>
      </div>
    </section>
    </>

  )
}
