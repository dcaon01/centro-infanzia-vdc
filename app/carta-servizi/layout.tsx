import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Carta dei servizi",
    description: "Visualizza la carta dei servizi messi a disposizione dal nostro centro"
}

export default function ServicesLayout({
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