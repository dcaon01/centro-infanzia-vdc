'use client';

import { Sour_Gummy } from "next/font/google";
import classes from "./page.module.scss";
import PageHeader from "@/components/atoms/page-header/PageHeader";
const sour_gummy = Sour_Gummy({ subsets: ['latin'] });

/**
 * Component that renders the planning page.
 * @returns the rendering of the page.
 */
const PlanningPage = () => {
    /**
     * Manages the download of the document
     */
    function handleDocumentDownload(): void {
        window.open("/documents/progettazione/ptof22-25.pdf")
    }

    return (
        <main>
            <PageHeader title="Progettazione"/>
            <div className={classes.pageContent}>
                <p>Di seguito, potete scaricare il documento riportante le informazioni riguardanti l&apos;offerta formativa del nostro centro.</p>
                <div className={classes.previewContainer}>
                    <img className={classes.documentPreview} src="/images/documents-previews/progettazione.png" onClick={handleDocumentDownload}/>
                </div>
                <div className={classes.dbContainer}>
                    <button className={`${classes.downloadButton} ${sour_gummy.className}`} onClick={handleDocumentDownload}>
                        Visualizza
                    </button>
                </div>
            </div>
        </main>
    );
}

export default PlanningPage;