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
    { src: "/images/childhood/9.jpg" },
    { src: "/images/childhood/10.jpg" },
    { src: "/images/childhood/11.jpg" },
    { src: "/images/childhood/12.jpg" },
    { src: "/images/childhood/13.jpg" },
    { src: "/images/childhood/14.jpg" },
    { src: "/images/childhood/15.jpg" },
    { src: "/images/childhood/16.jpg" },
    { src: "/images/childhood/17.jpg" },
    { src: "/images/childhood/18.jpg" },
    { src: "/images/childhood/19.jpg" },
    { src: "/images/childhood/20.jpg" },
    { src: "/images/childhood/21.jpg" },
    { src: "/images/childhood/22.jpg" },
    { src: "/images/childhood/23.jpg" },
    { src: "/images/childhood/24.jpg" },
    { src: "/images/childhood/25.jpg" },
    { src: "/images/childhood/26.jpg" },
    { src: "/images/childhood/27.jpg" },
    { src: "/images/childhood/28.jpg" },
    { src: "/images/childhood/29.jpg" },
    { src: "/images/childhood/30.jpg" },
    { src: "/images/childhood/31.jpg" },
    { src: "/images/childhood/32.jpg" },
    { src: "/images/childhood/33.jpg" },
    { src: "/images/childhood/34.jpg" },
    { src: "/images/childhood/35.jpg" },
]

const activities = images.slice(0, 11);
const rooms = images.slice(11, 19);
const dining = images.slice(19, 21);
const externals = images.slice(21, 27);
const baths = images.slice(27, 30);
const gym = images.slice(30);

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
            <PageHeader title="Scuola dell'infanzia" />
            <div className={classes.pageContent}>
                <h2>Cos&apos;è la scuola d&apos;infanzia?</h2>
                <p>La scuola d&apos;infanzia si rivolge a tutti i bambini e bambine di età compresa tra i tre e i sei anni.</p>
                <p>
                    La scuola dell&apos;infanzia concorre all&apos;educazione e allo sviluppo affettivo, sociale, psicomotorio,
                    cognitivo e religioso dei bambini promuovendone le potenzialità di relazione, autonomia,
                    creatività, apprendimento e mira ad assicurare un&apos;effettiva uguaglianza delle opportunità
                    educative. Nel rispetto del ruolo educativo dei genitori, contribuisce alla formazione integrale dei
                    bambini e realizza la continuità educativa con il nido e la scuola primaria.
                </p>
                <p>
                    Nella scuola dell&apos;infanzia l&apos;apprendimento avviene attraverso l&apos;esplorazione, il contatto con gli
                    oggetti, la natura, l&apos;arte, il territorio in una dimensione ludica.
                    Le metodologie didattiche fanno riferimento all&apos;esperienza concreta, all&apos;esplorazione, alla
                    scoperta, al gioco, al procedere per tentativi ed errori, alla conversazione e al confronto tra pari e
                    con l&apos;adulto. Molto importanti sono le routine che regolano i ritmi della giornata e aiutano i
                    bambini ad orientarsi rispetto allo scorrere del tempo e potenziano le loro competenze personali,
                    cognitive, affettive e comunicative. Ampio spazio viene riservato al gioco durante il quale i bambini
                    si esprimono, raccontano, rielaborano in modo creativo le esperienze personali e sociali.
                </p>
                <p>
                    L&apos;osservazione da parte dei docenti rappresenta uno strumento fondamentale per accompagnare
                    il bambino nel suo sviluppo integrale; la documentazione serve a tenere traccia dei progressi
                    dell&apos;apprendimento individuale e di gruppo; la verifica documenta i processi di crescita di ciascun
                    bambini.
                </p>
                <h3 className={classes.divisor}>Attività</h3>
                <Masonry
                    breakpointCols={{ default: 3, 768: 2, 480: 1 }}
                    className={classes.masonryGrid}
                    columnClassName={classes.masonryColumn}
                >
                    {activities.map((image, i) => (
                        <motion.img
                            layoutId= {`activities-${i}`}
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
                <h3 className={classes.divisor}>Contesti educativi</h3>
                <Masonry
                    breakpointCols={{ default: 3, 768: 2, 480: 1 }}
                    className={classes.masonryGrid}
                    columnClassName={classes.masonryColumn}
                >
                    {rooms.map((image, i) => (
                        <motion.img
                            layoutId= {`rooms-${i}`}
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
                <h3 className={classes.divisor}>Sala da pranzo</h3>
                <Masonry
                    breakpointCols={{ default: 3, 768: 2, 480: 1 }}
                    className={classes.masonryGrid}
                    columnClassName={classes.masonryColumn}
                >
                    {dining.map((image, i) => (
                        <motion.img
                            layoutId= {`dining-${i}`}
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
                <h3 className={classes.divisor}>Giardino</h3>
                <Masonry
                    breakpointCols={{ default: 3, 768: 2, 480: 1 }}
                    className={classes.masonryGrid}
                    columnClassName={classes.masonryColumn}
                >
                    {externals.map((image, i) => (
                        <motion.img
                            layoutId= {`externals-${i}`}
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
                <h3 className={classes.divisor}>Servizi</h3>
                <Masonry
                    breakpointCols={{ default: 3, 768: 2, 480: 1 }}
                    className={classes.masonryGrid}
                    columnClassName={classes.masonryColumn}
                >
                    {baths.map((image, i) => (
                        <motion.img
                            layoutId= {`baths-${i}`}
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
                <h3 className={classes.divisor}>Palestra</h3>
                <Masonry
                    breakpointCols={{ default: 3, 768: 2, 480: 1 }}
                    className={classes.masonryGrid}
                    columnClassName={classes.masonryColumn}
                >
                    {gym.map((image, i) => (
                        <motion.img
                            layoutId= {`gym-${i}`}
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