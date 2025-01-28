import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "@/components/molecules/navbar/navbar";

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
