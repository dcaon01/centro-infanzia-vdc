import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Scuola dell'infanzia",
    description: "Esplora la scuola dell'infanzia del nostro centro"
}

export default function ChildhoodLayout({
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