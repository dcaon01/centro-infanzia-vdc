import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "@/components/molecules/navbar/navbar";
import { Sour_Gummy } from "next/font/google";
const sour_gummy = Sour_Gummy({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Scuola Almarosa Rech",
  description: "Sito web della scuola materna Almarosa Rech di Villa del Conte",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sour_gummy.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
