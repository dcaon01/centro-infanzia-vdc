'use client';

import { useState } from "react";
import classes from "./page.module.scss";
import PageHeader from "@/components/atoms/page-header/PageHeader";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "motion/react";
import { spring } from "motion";

const images = [
    { src: "/images/spring/1.jpg" },
    { src: "/images/spring/2.jpg" },
    { src: "/images/spring/3.jpg" },
    { src: "/images/spring/4.jpg" },
    { src: "/images/spring/5.jpg" },
    { src: "/images/spring/6.jpg" },
    { src: "/images/spring/7.jpg" },
    { src: "/images/spring/8.jpg" },
    { src: "/images/spring/9.jpg" },
    { src: "/images/spring/10.jpg" },
    { src: "/images/spring/11.jpg" },
    { src: "/images/spring/12.jpg" },
    { src: "/images/spring/13.jpg" },
    { src: "/images/spring/14.jpg" },
    { src: "/images/spring/15.jpg" },
    { src: "/images/spring/16.jpg" },
    { src: "/images/spring/17.jpg" },
    { src: "/images/spring/18.jpg" },
    { src: "/images/spring/19.jpg" },
    { src: "/images/spring/20.jpg" },
    { src: "/images/spring/21.jpg" },
    { src: "/images/spring/22.jpg" },
    { src: "/images/spring/23.jpg" },
    { src: "/images/spring/24.jpg" },
    { src: "/images/childhood/1.jpg" },
    { src: "/images/childhood/2.jpg" },
]

/**
 * Renders the Nuersery page.
 * @returns the render of the component.
 */
const SpringPage = () => {
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
            <PageHeader title="Primavera" />
            <div className={classes.pageContent}>
                <Masonry
                    breakpointCols={{ default: 3, 768: 2, 480: 1 }}
                    className={classes.masonryGrid}
                    columnClassName={classes.masonryColumn}
                >
                    {images.map((image, i) => (
                        <motion.img
                            layoutId= {`${i}`}
                            initial={{
                                y: +100,
                                opacity: 0
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{
                                duration: 0.5,
                                type: spring
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

export default SpringPage;