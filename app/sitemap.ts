import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://centro-infanzia-vdc.vercel.app";

    const staticRoutes = [
        "",
        "/contatti",
        "/carta-servizi",
        "/modulistica",
        "/nido",
        "/pasti",
        "/progettazione",
        "/regolamento",
        "/scuola-infanzia",
        "/sezione-primavera"
    ].map((route) => {
        return {
            url: `${baseUrl}${route}`,
            lastModified: new Date()
        }
    });

    return [...staticRoutes];
}