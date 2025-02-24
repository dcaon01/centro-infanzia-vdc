import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Modulistica",
    description: "Visualizza e consulta i moduli e i documenti del nostro centro"
}

export default function ModulesLayout({
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