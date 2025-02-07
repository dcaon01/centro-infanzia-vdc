import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "@/components/molecules/navbar/Navbar";
import { Sour_Gummy } from "next/font/google";
import Footer from "@/components/molecules/footer/Footer";
import { Suspense } from "react";
import Loader from "@/components/atoms/loader/loader";
const sour_gummy = Sour_Gummy({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Scuola Almarosa Rech",
  description: "Sito web della scuola materna Almarosa Rech di Villa del Conte",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sour_gummy.className}`}>
        <Suspense fallback={<Loader />}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
