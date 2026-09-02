import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Play Math Puzzles - Free Math Puzzle Game",

  description:
    "Play Math Puzzles online for free. Solve number sequences, discover hidden patterns, and challenge your logical thinking in this fun math puzzle game.",

  alternates: {
    canonical: "https://mathpuzzle.fun/play",
  },

  openGraph: {
    type: "website",

    url: "https://mathpuzzle.fun/play",

    title: "Play Math Puzzles - Free Math Puzzle Game",

    description:
      "Play Math Puzzles online for free. Solve number sequences, discover hidden patterns, and challenge your logical thinking.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Play Math Puzzles - Math Puzzle Game",
      },
    ],
  },
};

const gameJsonLd = {
  "@context": "https://schema.org",

  "@type": "VideoGame",

  name: "Math Puzzles",

  description:
    "A free online math puzzle game where players solve number sequences, find patterns, and complete challenging levels.",

  url: "https://mathpuzzle.fun/play",

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
    name: "Math Puzzles",
    url: "https://mathpuzzle.fun/",
  },
};
export default function Page(){
    return(
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
            __html: JSON.stringify(gameJsonLd),
            }}
        />
        <section className="flex-1 flex flex-col items-center rounded-2xl border-[2px] 
        border-[#3a5990] max-w-md min-[2000px]:max-w-[1280px] my-5 mx-auto
        bg-[#068fff]">
        <h1 className="sr-only">
          Play Math Puzzles - Free Math Puzzle Game
        </h1>
        <iframe
        src="/math/index.html"
        title="Math Puzzles math puzzle game"
        className="w-full h-full max-h-[1920px] border-0 p-2"
        allow="autoplay; fullscreen"
        />
        </section>
        </>
    )
}