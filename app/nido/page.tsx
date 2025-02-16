'use client';

import { useState } from "react";
import classes from "./page.module.scss";
import PageHeader from "@/components/atoms/page-header/PageHeader";
import Masonry from "react-masonry-css";
import "yet-another-react-lightbox/styles.css";
import { motion, spring } from "motion/react";
import Lightbox from "yet-another-react-lightbox";

const babies = [
    { src: "/images/nursery/babies/1.jpg" },
    { src: "/images/nursery/babies/2.jpg" },
    { src: "/images/nursery/babies/3.jpg" },
    { src: "/images/nursery/babies/4.jpg" },
    { src: "/images/nursery/babies/5.jpg" },
    { src: "/images/nursery/babies/6.jpg" },
    { src: "/images/nursery/babies/7.jpg" },
    { src: "/images/nursery/babies/8.jpg" },
    { src: "/images/nursery/babies/9.jpg" },
    { src: "/images/nursery/babies/10.jpg" },
    { src: "/images/nursery/babies/11.jpg" },
    { src: "/images/nursery/babies/12.jpg" }
]

const welcoming = babies.slice(0, 1);
const babiesPlayground = babies.slice(1, 7);
const babiesDiningRoom = babies.slice(7, 10);
const babiesChanging = babies.slice(10);

const over12months = [
    { src: "/images/nursery/over12months/1.jpg" },
    { src: "/images/nursery/over12months/2.jpg" },
    { src: "/images/nursery/over12months/3.jpg" },
    { src: "/images/nursery/over12months/4.jpg" },
    { src: "/images/nursery/over12months/5.jpg" },
    { src: "/images/nursery/over12months/6.jpg" },
    { src: "/images/nursery/over12months/7.jpg" },
    { src: "/images/nursery/over12months/8.jpg" },
    { src: "/images/nursery/over12months/9.jpg" },
    { src: "/images/nursery/over12months/10.jpg" },
    { src: "/images/nursery/over12months/11.jpg" },
    { src: "/images/nursery/over12months/12.jpg" },
    { src: "/images/nursery/over12months/13.jpg" },
    { src: "/images/nursery/over12months/14.jpg" },
    { src: "/images/nursery/over12months/15.jpg" },
]

const overPlayground = over12months.slice(0, 4);
const overAcceptance = over12months.slice(4, 11);
const overDining = over12months.slice(11, 13);
const overBaths = over12months.slice(13);

const images = babies.concat(over12months);

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
                <h2>Cos&apos;è il nido?</h2>
                <p>Il nostro nido rappresenta il primo luogo di socializzazione al di fuori della famiglia,
                    dove il bambino può entrare in relazione con altri adulti di riferimento ma anche con il
                    gruppo dei pari che con il tempo assumerà un ruolo sempre più centrale nella sua crescita e sviluppo.
                </p>

                <p>
                    L&apos;offerta di proposte educative e differenziate andranno a stimolare la crescita e l&apos;apprendimento
                    potenziando lo sviluppo psico-fisico dei bambini. Nel nostro nido è presente una sezione lattanti
                    che accoglie i bambini a partire dai 3 mesi pensata per esaudire i bisogni di accudimento e
                    sperimentazione; sono poi presenti spazi che accolgono bambini dai 12 ai 36 mesi strutturati
                    e arredati in base alle loro esigenze di scoperta, esplorazione e crescita. 
                </p>
                <p> 
                    Nel nostro servizio
                    sono presenti due giardini differenti, uno ad uso esclusivo dei lattanti, mentre l&apos;altro utilizzato
                    di bambini di età compresa tra i 12 e 36 mesi che risponde a bisogni di socializzazione, di
                    contatto con la natura e scoperta di materiali.
                </p>
                <h2>Lattanti - Da 3 a 12 mesi</h2>
                <h3>Accoglienza</h3>
                <Masonry
                    breakpointCols={{ default: 3, 768: 2, 480: 1 }}
                    className={classes.masonryGrid}
                    columnClassName={classes.masonryColumn}
                >
                    {welcoming.map((image, i) => (
                        <motion.img
                            layoutId={`welcoming-${i}`}
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
                <h3>Contesti educativi</h3>
                <Masonry
                    breakpointCols={{ default: 3, 768: 2, 480: 1 }}
                    className={classes.masonryGrid}
                    columnClassName={classes.masonryColumn}
                >
                    {babiesPlayground.map((image, i) => (
                        <motion.img
                            layoutId={`babiesPlayground-${i}`}
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
                <h3>Sala da pranzo</h3>
                <Masonry
                    breakpointCols={{ default: 3, 768: 2, 480: 1 }}
                    className={classes.masonryGrid}
                    columnClassName={classes.masonryColumn}
                >
                    {babiesDiningRoom.map((image, i) => (
                        <motion.img
                            layoutId={`babiesDiningRoom-${i}`}
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
                <h3>Fasciatoi</h3>
                <Masonry
                    breakpointCols={{ default: 3, 768: 2, 480: 1 }}
                    className={classes.masonryGrid}
                    columnClassName={classes.masonryColumn}
                >
                    {babiesChanging.map((image, i) => (
                        <motion.img
                            layoutId={`babiesChanging-${i}`}
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
                <h2>Dai 12 mesi ai 36 mesi</h2>
                <h3>Contesti educativi</h3>
                <Masonry
                    breakpointCols={{ default: 3, 768: 2, 480: 1 }}
                    className={classes.masonryGrid}
                    columnClassName={classes.masonryColumn}
                >
                    {overPlayground.map((image, i) => (
                        <motion.img
                            layoutId={`overPlayground-${i}`}
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
                <h3>Zona accoglienza</h3>
                <Masonry
                    breakpointCols={{ default: 3, 768: 2, 480: 1 }}
                    className={classes.masonryGrid}
                    columnClassName={classes.masonryColumn}
                >
                    {overAcceptance.map((image, i) => (
                        <motion.img
                            layoutId={`overAcceptance-${i}`}
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
                <h3>Sala da pranzo</h3>
                <Masonry
                    breakpointCols={{ default: 3, 768: 2, 480: 1 }}
                    className={classes.masonryGrid}
                    columnClassName={classes.masonryColumn}
                >
                    {overDining.map((image, i) => (
                        <motion.img
                            layoutId={`overDining-${i}`}
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
                <h3>Servizi</h3>
                <Masonry
                    breakpointCols={{ default: 3, 768: 2, 480: 1 }}
                    className={classes.masonryGrid}
                    columnClassName={classes.masonryColumn}
                >
                    {overBaths.map((image, i) => (
                        <motion.img
                            layoutId={`overBaths-${i}`}
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
                {/* Calcolare gli indici per visualizzare le immagini che clicchiamo */}
                <Lightbox noScroll={{ disabled: true }} open={isBoxOpen} index={index} close={() => setIsBoxOpen(false)} slides={images} />
            </div>
        </main>
    );
}

export default NurseryPage;