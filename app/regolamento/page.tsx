'use client';

import classes from "./page.module.scss";
import PageHeader from "@/components/atoms/page-header/PageHeader";
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
            <PageHeader title="Regolamento"/>
            <div className={classes.pageContent}>
                <p>Di seguito, potete scaricare il regolamento del nostro centro.</p>
                <div className={classes.previewContainer}>
                    <img 
                        className={classes.documentPreview} 
                        src="/images/documents-previews/regolamento-centro-infanzia-GENNAIO-2025.png" 
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

export default RegulationPage;