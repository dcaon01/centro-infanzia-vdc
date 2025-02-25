import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "@/components/molecules/navbar/Navbar";
import { Sour_Gummy } from "next/font/google";
import Footer from "@/components/molecules/footer/Footer";
const sour_gummy = Sour_Gummy({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Scuola Almarosa Rech",
  description: "Benvenuti al centro infanzia suor Almarosa Rech di Villa del Conte",
  keywords: ["asilo", "scuola", "centro", "infanzia", "villa del conte", "nido", "primavera", "almarosa", "rech"],
  robots: "index, follow",
  openGraph: {
    title: "Scuola Almarosa Rech",
    description: "Benvenuti al centro infanzia suor Almarosa Rech di Villa del Conte",
    siteName: "Scuola Almarosa Rech",
    images: [
      {
        url: "https://centro-infanzia-vdc.vercel.app/images/logo/sole.png",
        width: 500,
        height: 500,
      },
    ],
    type: "website",
  },
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
