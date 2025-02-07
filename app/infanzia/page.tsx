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
                    Le metodologie didattiche fanno riferimento all&apos;ìesperienza concreta, all&apos;esplorazione, alla
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