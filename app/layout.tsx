import type { Metadata, Viewport } from "next";
import {
  Anton,
  Bebas_Neue,
  Oswald,
  Inter,
  Manrope,
  Plus_Jakarta_Sans,
  Cormorant_Garamond,
} from "next/font/google";
import RevealObserver from "@/components/RevealObserver";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fit To Films™ | Become Screen Ready",
  description:
    "Fit To Films™: India's First Screen-Ready & Cinema Transformation Ecosystem. Transform Your Body. Build Your Confidence. Become Screen Ready.",
  openGraph: {
    title: "Fit To Films™ | Become Screen Ready",
    description:
      "India's First Screen-Ready & Cinema Transformation Ecosystem",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A0E1A",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${bebas.variable} ${oswald.variable} ${inter.variable} ${manrope.variable} ${jakarta.variable} ${cormorant.variable}`}
    >
      <body>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
