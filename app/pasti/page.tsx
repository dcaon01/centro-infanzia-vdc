'use client';

import classes from "./page.module.scss";
import PageHeader from "@/components/atoms/page-header/PageHeader";
import React from "react";
import { Sour_Gummy } from "next/font/google";
const sour_gummy = Sour_Gummy({ subsets: ['latin'] });


const MenuPage = () => {
    /**
     * Manages the download of the document
     */
    function handleDocumentDownload(menu: number): void {
        switch (menu) {
            case 1:
                window.open("/documents/menu/a4-menu-infanzia-2024-2025-autunno-inverno.pdf", "_blank", "noopener,noreferrer");
                break;
            case 2:
                window.open("/documents/menu/a4-menu-infanzia-2024-2025-primavera-estate.pdf", "_blank", "noopener,noreferrer");
                break;
            case 3:
                window.open("/documents/menu/a4-menu-nido-2024-2025-autunno-inverno.pdf", "_blank", "noopener,noreferrer");
                break;
            case 4:
                window.open("/documents/menu/a4-menu-nido-2024-2025-primavera-estate.pdf", "_blank", "noopener,noreferrer");
                break;
            default:
                window.open(undefined, "_blank", "noopener,noreferrer");
            // end
        }
    }

    return (
        <main>
            <PageHeader title="Pasti" />
            <div className={classes.pageContent}>
                <h2>Infanzia</h2>
                <div className={classes.previewContainer}>
                    <img
                        className={classes.documentPreview}
                        src="/images/documents-previews/a4-menu-infanzia-2024-2025-autunno-inverno.png"
                        onClick={() => handleDocumentDownload(1)}
                    />
                </div>
                <div className={classes.dbContainer}>
                    <button
                        className={`${classes.downloadButton} ${sour_gummy.className}`}
                        onClick={() => handleDocumentDownload(1)}
                    >
                        Visualizza Autunno/Inverno
                    </button>
                </div>
                <div className={classes.previewContainer}>
                    <img
                        className={classes.documentPreview}
                        src="/images/documents-previews/a4-menu-infanzia-2024-2025-primavera-estate.png"
                        onClick={() => handleDocumentDownload(2)} 
                    />
                </div>
                <div className={classes.dbContainer}>
                    <button
                        className={`${classes.downloadButton} ${sour_gummy.className}`}
                        onClick={() => handleDocumentDownload(2)}
                    >
                        Visualizza Primavera/Estate
                    </button>
                </div>
                <h2>Nido</h2>
                <div className={classes.previewContainer}>
                    <img
                        className={classes.documentPreview}
                        src="/images/documents-previews/a4-menu-nido-2024-2025-autunno-inverno.png"
                        onClick={() => handleDocumentDownload(3)}
                    />
                </div>
                <div className={classes.dbContainer}>
                    <button
                        className={`${classes.downloadButton} ${sour_gummy.className}`}
                        onClick={() => handleDocumentDownload(3)}
                    >
                        Visualizza Autunno/Inverno
                    </button>
                </div>
                <div className={classes.previewContainer}>
                    <img
                        className={classes.documentPreview}
                        src="/images/documents-previews/a4-menu-nido-2024-2025-primavera-estate.png"
                        onClick={() => handleDocumentDownload(4)} 
                    />
                </div>
                <div className={classes.dbContainer}>
                    <button
                        className={`${classes.downloadButton} ${sour_gummy.className}`}
                        onClick={() => handleDocumentDownload(4)}
                    >
                        Visualizza Primavera/Estate
                    </button>
                </div>
            </div>
        </main>
    );
}

export default MenuPage;