'use client';

import { Sour_Gummy } from "next/font/google";
import classes from "./page.module.scss";
import PageHeader from "@/components/atoms/page-header/PageHeader";
import { motion } from "motion/react";
const sour_gummy = Sour_Gummy({ subsets: ['latin'] });

/**
 * Component that renders the planning page.
 * @returns the rendering of the page.
 */
const PlanningPage = () => {
    /**
     * Manages the download of the document of the offer.
     */
    function handleOfferDocumentDownload(): void {
        window.open("/documents/planning/ptof22-25.pdf", "_blank", "noopener,noreferrer");
    }

    /**
     * Manages the download of the document of the project.
     */
    function handleProjectDocumentDownload() {
        window.open("/documents/planning/pps2024-25.pdf", "_blank", "noopener,noreferrer");
    }

    return (
        <main>
            <PageHeader title="Progettazione"/>
            <div className={classes.pageContent}>
                <h2>Offerta formativa</h2>
                <div className={classes.previewContainer}>
                    <motion.img 
                        className={classes.documentPreview} 
                        src="/images/documents-previews/progettazione.png" 
                        onClick={handleOfferDocumentDownload}
                        initial={{ opacity: 0 }}
                        animate={{opacity: 1}}
                    />
                </div>
                <div className={classes.dbContainer}>
                    <button 
                        className={`${classes.downloadButton} ${sour_gummy.className}`}
                        onClick={handleOfferDocumentDownload}
                    >
                        Visualizza
                    </button>
                </div>
                <h2>Progetto socio-psico pedagogico</h2>
                <div className={classes.previewContainer}>
                    <motion.img 
                        className={classes.documentPreview} 
                        src="/images/documents-previews/pps2024-2025.png" 
                        onClick={handleProjectDocumentDownload}
                        initial={{ opacity: 0 }}
                        animate={{opacity: 1}}
                    />
                </div>
                <div className={classes.dbContainer}>
                    <button 
                        className={`${classes.downloadButton} ${sour_gummy.className}`} 
                        onClick={handleProjectDocumentDownload}
                    >
                        Visualizza
                    </button>
                </div>
            </div>
        </main>
    );
}

export default PlanningPage;