import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Regolamento",
    description: "Visualizza il regolamento del nostro centro"
}

export default function RegulationLayout({
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