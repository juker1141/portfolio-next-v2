import type { Metadata, Viewport } from "next";
import { Amatic_SC, Roboto, Titan_One } from "next/font/google";

import "./globals.css";
import "./fullpageCustom.css";
import "./experience.css";
import "./doodle.css";

const amaticSC = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amitic-sc",
});

const roboto = Roboto({
  weight: [
    "400",
    "700",
    "100",
    "300",
    "500",
    "900",
    "400",
    "700",
    "100",
    "300",
    "500",
    "900",
  ],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const titanOne = Titan_One({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-titan-one",
});

export const metadata: Metadata = {
  title: "Ryu | Frontend Web Developer | Backend Web Developer",
  description: "A Frontend focused Web Developer",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${amaticSC.variable} ${roboto.variable} ${titanOne.variable} font-roboto`}
      >
        {children}
      </body>
    </html>
  );
}
