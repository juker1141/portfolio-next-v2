import type { Metadata } from "next";
import { Amatic_SC, Roboto, Londrina_Solid, Titan_One } from "next/font/google";

import "./globals.css";
import "./doodle.css";
import "./test.scss";

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

const londrinaSolid = Londrina_Solid({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-londrina-solid",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${amaticSC.variable} ${roboto.variable} ${londrinaSolid.variable} ${titanOne.variable} font-roboto`}
      >
        {children}
      </body>
    </html>
  );
}
