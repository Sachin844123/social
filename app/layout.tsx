import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Elite - Premium Social Media Management",
  description: "Results-driven social media management for influencers, celebrities, and brands. Grow your online presence with our expert team.",
  keywords: "social media management, influencer marketing, content strategy, Instagram growth, TikTok management",
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
