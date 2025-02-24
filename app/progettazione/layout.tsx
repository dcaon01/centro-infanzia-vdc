import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Progettazione",
    description: "Visualizza l'offerta formativa e il progetto socio-psico pedagogico del nostro centro"
}

export default function PlanningLayout({
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