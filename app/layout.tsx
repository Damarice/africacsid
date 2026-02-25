import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Africa CSID - Sustainable and Inclusive Development",
  description: "Supporting marginalized communities across Africa through peace, economic empowerment, and climate action.",
  keywords: ["Africa", "NGO", "sustainable development", "climate change", "peace", "economic empowerment"],
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
