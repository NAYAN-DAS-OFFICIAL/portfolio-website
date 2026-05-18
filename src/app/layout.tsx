import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nayan Das | Full Stack Developer",
  description:
    "Nayan Das is a Full Stack Developer skilled in Next.js, React, TypeScript, Node.js and scalable web applications.",

  keywords: [
    "Nayan Das",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Portfolio Website",
  ],

  authors: [{ name: "Nayan Das" }],

  creator: "Nayan Das",

  openGraph: {
    title: "Nayan Das Portfolio",
    description:
      "Modern Full Stack Developer Portfolio built with Next.js and Tailwind CSS.",
    url: "https://portfolio-website-one-fawn-18.vercel.app",
    siteName: "Nayan Das Portfolio",
    locale: "en_US",
    type: "website",
  },

  verification: {
    google:"XQ3SFEv83ZpGIpdUtJsFkovc4QWTGDQwY6QrjZeiBvQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}