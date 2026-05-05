import type { Metadata } from "next";
import { UnifrakturMaguntia, Playfair_Display, Oswald, Lora, Courier_Prime } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const unifraktur = UnifrakturMaguntia({
  weight: "400",
  variable: "--font-unifraktur",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const courier = Courier_Prime({
  weight: ["400", "700"],
  variable: "--font-courier",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishal Keerthan Parankusham Portfolio",
  description: "Product Engineer, Ex-Geode Labs, 7x Hackathons winner, JPMC Code for Good '25 winner. Building robust, scalable systems and high-performance architecture.",
  openGraph: {
    title: "Vishal Keerthan Parankusham Portfolio",
    description: "Product Engineer, Ex-Geode Labs, 7x Hackathons winner, JPMC Code for Good '25 winner. Building robust, scalable systems and high-performance architecture.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Vishal Keerthan Parankusham Portfolio",
    description: "Product Engineer, Ex-Geode Labs, 7x Hackathons winner, JPMC Code for Good '25 winner. Building robust, scalable systems and high-performance architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${unifraktur.variable} ${playfair.variable} ${oswald.variable} ${lora.variable} ${courier.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full w-full lg:h-full lg:overflow-hidden overflow-y-auto flex flex-col font-lora bg-[#CBC3BA] text-news-ink selection:bg-news-accent selection:text-news-bg p-1 sm:p-2">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
