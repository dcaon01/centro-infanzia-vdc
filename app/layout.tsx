import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "@/components/molecules/navbar/Navbar";
import { Sour_Gummy } from "next/font/google";
import Footer from "@/components/molecules/footer/Footer";
import { lazy, Suspense } from "react";
import Loader from "@/components/atoms/loader/loader";
// const LazyChildren = lazy(() => import('@/components/atoms/lazy-children/LazyChildren'));
const sour_gummy = Sour_Gummy({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Scuola Almarosa Rech",
  description: "Sito web del centro infanzia suor Almarosa Rech di Villa del Conte",
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
        <Navbar />
        <Suspense fallback={<Loader />}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
