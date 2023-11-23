import type { Metadata } from "next";
import { Amatic_SC } from "next/font/google";
import "./globals.css";

const amaticSC = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amitic-sc",
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
      <body className={amaticSC.variable}>{children}</body>
    </html>
  );
}
