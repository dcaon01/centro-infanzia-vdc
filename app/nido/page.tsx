'use client';

import { useState } from "react";
import classes from "./page.module.scss";
import PageHeader from "@/components/atoms/page-header/PageHeader";

const images = [
    { src: "/images/nursery/1."}
]

/**
 * Renders the Nuersery page.
 * @returns the render of the component.
 */
const NurseryPage = () => {
    // To open the lightbox.
    const [isBoxOpen, setIsBoxOpen] = useState(false);
    // To keep track of the image index.
    const [index, setIndex] = useState(0);

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
            <PageHeader title="Nido" />
            <div className={classes.pageContent}>
            </div>
        </main>
    );
}

export default NurseryPage;