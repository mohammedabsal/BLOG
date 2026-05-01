import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Absal S | Resume & Portfolio",
  description:
    "Resume-style personal site for Mohammed Absal S, a B.Tech AI and Data Science student with hackathon wins, internship experience, and AI-driven projects.",
  keywords: [
    "Mohammed Absal S",
    "resume",
    "portfolio",
    "hackathon winner",
    "AI and Data Science",
    "student developer",
  ],
  authors: [{ name: "Mohammed Absal S" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}
