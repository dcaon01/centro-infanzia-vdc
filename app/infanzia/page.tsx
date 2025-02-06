'use client';

import classes from "./page.module.scss";
import PageHeader from "@/components/atoms/page-header/PageHeader";
import { motion } from "motion/react";
import { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";

const images = [
    { src: "/images/childhood/1.jpg" },
    { src: "/images/childhood/2.jpg" },
    { src: "/images/childhood/3.jpg" },
    { src: "/images/childhood/4.jpg" },
    { src: "/images/childhood/5.jpg" },
    { src: "/images/childhood/6.jpg" },
    { src: "/images/childhood/7.jpg" },
    { src: "/images/childhood/8.jpg" },
]

const ChildhoodPage = () => {
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
            <PageHeader title="Infanzia" />
            <div className={classes.pageContent}>
                <Masonry
                    breakpointCols={{ default: 3, 768: 2, 480: 2 }}
                    className={classes.masonryGrid}
                    columnClassName={classes.masonryColumn}
                >
                    {images.map((image, i) => (
                        <motion.img
                            initial={{
                                y: +100,
                                opacity: 0
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
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

export default ChildhoodPage;