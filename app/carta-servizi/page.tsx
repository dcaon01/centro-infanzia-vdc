'use client';

import PageHeader from "@/components/atoms/page-header/PageHeader";
import classes from "./page.module.scss";
import { Sour_Gummy } from "next/font/google";
import { motion } from "motion/react";
const sour_gummy = Sour_Gummy({ subsets: ['latin'] });

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
                    <motion.img
                        className={classes.documentPreview}
                        src="/images/documents-previews/carta-servizi.png"
                        onClick={handleDocumentDownload}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
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