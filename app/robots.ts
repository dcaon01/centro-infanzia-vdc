import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: ["/", "/images/logo/sole.png"],
            disallow: ["/*.pdf$", "/*.png$", "/*.jpg$"]
        },
        sitemap: "https://centro-infanzia-vdc.vercel.app/sitemap.xml"
    };
}