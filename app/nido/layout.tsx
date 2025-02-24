import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nido",
    description: "Esplora il nido del nostro centro"
}

export default function NurseryLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}