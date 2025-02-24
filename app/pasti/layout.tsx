import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pasti",
    description: "Visualizza il menu e l'offerta per i pasti dei bambini del nostro centro"
}

export default function MenuLayout({
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