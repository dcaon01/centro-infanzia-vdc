'use client';

import classes from "./page.module.scss";
import PageHeader from "@/components/atoms/page-header/PageHeader";
import { motion } from "motion/react";
import { Sour_Gummy } from "next/font/google";
const sour_gummy = Sour_Gummy({ subsets: ['latin'] });

const RegulationPage = () => {
    /**
     * Manages the download of the document
     */
    function handleDocumentDownload(): void {
        window.open("/documents/regulations/regolamento-centro-infanzia-FEBBRAIO-2025.pdf", "_blank", "noopener,noreferrer");
    }

    return (
        <main>
            <PageHeader title="Regolamento" />
            <div className={classes.pageContent}>
                <div className={classes.previewContainer}>
                    <motion.img
                        className={classes.documentPreview}
                        src="/images/documents-previews/regolamento-centro-infanzia-GENNAIO-2025.png"
                        onClick={handleDocumentDownload}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
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

export default RegulationPage;