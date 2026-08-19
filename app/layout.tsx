import type { Metadata } from "next"
import { Geist, Geist_Mono, Noto_Sans, Raleway } from "next/font/google"
import Script from "next/script";
import "./globals.css"
import { cn } from "@/lib/utils";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
const ralewayHeading = Raleway({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({subsets: ["latin"],variable: "--font-mono",})

export const metadata: Metadata = {
  metadataBase: new URL("https://mathpuzzle.fun"),

  title: {
    default: "Math Genius - Math Puzzle Game",
    template: "%s | Math Genius",
  },

  description:
    "Play Math Genius, a fun and challenging math puzzle game. Solve number sequences, find patterns, complete levels, and test your mathematical skills online.",
  applicationName: "Math Genius",

  authors: [
    {
      name: "Math Genius",
    },
  ],

  creator: "Math Genius",

  publisher: "Math Genius",

  category: "games",

  keywords: [
    "math puzzle",
    "math puzzle game",
    "math game",
    "math games",
    "math puzzle online",
    "number puzzle",
    "number sequence puzzle",
    "sequence puzzle",
    "pattern puzzle",
    "brain game",
    "logic puzzle",
    "math game online",
    "free math game",
  ],

  alternates: {
    canonical: "https://mathpuzzle.fun/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",

    url: "https://mathpuzzle.fun/",

    siteName: "Math Genius",

    title: "Math Genius - Math Puzzle Game",

    description:
      "Solve number sequences, find patterns, and challenge your brain with Math Genius, a free online math puzzle game.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Math Genius - Math Puzzle Game",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Math Genius - Math Puzzle Game",

    description:
      "Solve number sequences, find patterns, and challenge your brain with Math Genius.",

    images: ["/og-image.png"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  name: "Math Genius",

  url: "https://mathpuzzle.fun/",

  description:
    "Math Genius is a free online math puzzle game based on number sequences, patterns, and logical thinking.",

  inLanguage: "en",

  publisher: {
    "@type": "Organization",

    name: "Math Genius",

    url: "https://mathpuzzle.fun/",
  },
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", notoSans.variable, ralewayHeading.variable)}
    >
      <body className="bg-[#011a52] min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <Header/>
        <main className="flex-1 flex min-h-0 mx-3 sm:mx-0">
        {children}
        </main>
        <Footer/>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2S4KCZB46G"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2S4KCZB46G');
          `}
        </Script>
      </body>
    </html>
  )
}
