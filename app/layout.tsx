import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const WorkSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Figma Clone",
  description:
    "A Minimalist Figma Clone using Fabric.js and LiveBlocks for real-time collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
