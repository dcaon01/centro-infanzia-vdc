'use client';

import classes from "./page.module.scss";
import PageHeader from "@/components/atoms/page-header/PageHeader";
import React, { useState } from "react";
import { Sour_Gummy } from "next/font/google";
import Masonry from "react-masonry-css";
import { motion } from "motion/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
const sour_gummy = Sour_Gummy({ subsets: ['latin'] });

const images = [
    { src: "/images/kitchen/1.jpg" },
    { src: "/images/kitchen/2.jpg" },
]

const MenuPage = () => {
    // To open the lightbox.
    const [isBoxOpen, setIsBoxOpen] = useState(false);
    // To keep track of the image index.
    const [index, setIndex] = useState(0);

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
            case 5:
                window.open("/documents/menu/menu_lattanti.pdf", "_blank", "noopener,noreferrer");
                break;
            default:
                window.open(undefined, "_blank", "noopener,noreferrer");
            // end
        }
    }

    /**
     * Opens the image to visualize it better.
     * @param i index of the image to open
     */
    function openLightbox(i: number) {
        setIndex(i);
        setIsBoxOpen(true);
    }

    return (
        <main>
            <PageHeader title="Pasti" />
            <div className={classes.pageContent}>
                <h2>Infanzia</h2>
                <div className={classes.previewContainer}>
                    <motion.img
                        className={classes.documentPreview}
                        src="/images/documents-previews/a4-menu-infanzia-2024-2025-autunno-inverno.png"
                        onClick={() => handleDocumentDownload(1)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
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
                    <motion.img
                        className={classes.documentPreview}
                        src="/images/documents-previews/a4-menu-infanzia-2024-2025-primavera-estate.png"
                        onClick={() => handleDocumentDownload(2)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
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
                    <motion.img
                        className={classes.documentPreview}
                        src="/images/documents-previews/a4-menu-nido-2024-2025-autunno-inverno.png"
                        onClick={() => handleDocumentDownload(3)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
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
                    <motion.img
                        className={classes.documentPreview}
                        src="/images/documents-previews/a4-menu-nido-2024-2025-primavera-estate.png"
                        onClick={() => handleDocumentDownload(4)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
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
                <h2>Lattanti</h2>
                <div className={classes.previewContainer}>
                    <motion.img
                        className={`${classes.infants}`}
                        src="/images/documents-previews/menu_lattanti.png"
                        onClick={() => handleDocumentDownload(5)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                </div>
                <div className={classes.dbContainer}>
                    <button
                        className={`${classes.downloadButton} ${sour_gummy.className}`}
                        onClick={() => handleDocumentDownload(5)}
                    >
                        Visualizza
                    </button>
                </div>
                <h3 className={classes.divisor}>Cucina</h3>
                <Masonry
                    breakpointCols={{ default: 3, 768: 2, 480: 1 }}
                    className={classes.masonryGrid}
                    columnClassName={classes.masonryColumn}
                >
                    {images.map((image, i) => (
                        <motion.img
                            layoutId={`kitchen-${i}`}
                            initial={{
                                y: +100,
                                opacity: 0
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            key={i}
                            src={image.src}
                            alt=""
                            onClick={() => openLightbox(i)}
                            className={classes.images}
                        />
                    ))}
                </Masonry>
                <Lightbox noScroll={{ disabled: true }} open={isBoxOpen} index={index} close={() => setIsBoxOpen(false)} slides={images} />
            </div>
        </main>
    );
}

export default MenuPage;