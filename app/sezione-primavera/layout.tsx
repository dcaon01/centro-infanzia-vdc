import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sezione primavera",
    description: "Esplora la sezione primavera del nostro centro"
}

export default function SpringLayout({
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