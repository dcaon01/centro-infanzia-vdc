'use client';

import PageHeader from "@/components/atoms/page-header/PageHeader";
import classes from "./page.module.scss";
import { Sour_Gummy } from "next/font/google";
import dynamic from "next/dynamic";
const sour_gummy = Sour_Gummy({ subsets: ['latin'] });
const LazyChildren = dynamic(() => import("@/components/atoms/lazy-children/LazyChildren"), {
    ssr: false,
});

/**
 * Component that renders the service page
 * @returns the rendering of the service page.
 */
const ServicesPage = () => {
    /**
     * Manages the download of the document
     */
    function handleDocumentDownload(): void {
        window.open("/documents/services/carta-servizi2024.pdf", "_blank", "noopener,noreferrer");
    }

    return (
        <main>
            <PageHeader title="Carta dei servizi" />
            <div className={classes.pageContent}>
                <div className={classes.previewContainer}>
                    <img
                        className={classes.documentPreview}
                        src="/images/documents-previews/carta-servizi.png"
                        onClick={handleDocumentDownload}
                    />
                </div>
                <div className={classes.dbContainer}>
                    <button
                        className={`${classes.downloadButton} ${sour_gummy.className}`}
                        onClick={handleDocumentDownload}
                    >
                        Visualizza
                    </button>
                </div>
            </div>
        </main>
    );
}

export default ServicesPage;