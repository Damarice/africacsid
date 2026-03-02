import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import LoadingBar from "@/components/LoadingBar";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Africa CSID - Sustainable and Inclusive Development",
  description: "Supporting marginalized communities across Africa through peace, economic empowerment, and climate action.",
  keywords: ["Africa", "NGO", "sustainable development", "climate change", "peace", "economic empowerment"],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logo.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={montserrat.className}>
        <LoadingBar />
        {children}
      </body>
    </html>
  );
}
