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
    { src: "/images/childhood/20.jpg" },
    { src: "/images/childhood/21.jpg" },
]

const externals = [
    { src: "/images/childhood/22.jpg" },
    { src: "/images/childhood/23.jpg" },
    { src: "/images/childhood/24.jpg" },
    { src: "/images/childhood/25.jpg" },
    { src: "/images/childhood/26.jpg" },
    { src: "/images/childhood/27.jpg" },
] 

const totalImages = images.concat(externals)

const activities = images.slice(0, 13);
const playGround = images.slice(13, 21);
const bathsAndChanging = images.slice(21, 24);
const dining = images.slice(24);

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
            <PageHeader title="Sezione Primavera" />
            <div className={classes.pageContent}>
                <h2>
                    Cos&apos;è la sezione primavera?
                </h2>
                <p>
                    La sezione primavera è un servizio educativo integrato alla scuola d&apos;infanzia che si pone l&apos;obiettivo di rispondere sia alle esigenze delle famiglie sia a 
                    quelle specifiche dei bambini tra i 24 e i 36 mesi. E&apos; un servizio di carattere sociale ed educativo, promosso al fine di garantire al bambino un equilibrato 
                    sviluppo psico-fisico, promuovendo la socializzazione, la conquista dell&apos;autonomia, lo sviluppo delle competenze e collaborando con la famiglia 
                    nell&apos;azione di cura ed educazione.
                </p>
                <p> 
                    La sezione primavera per definizione è un servizio che si pone come obiettivo di essere parte integrante alla Scuola dell&apos;Infanzia al fine di collaborare con 
                    essa arricchendosi a vicenda attraverso nuovi incontri, nuove esperienze, nuovi apprendimenti in un clima di partecipazione e di benessere.
                </p>
                <p>
                    Il punto di forza del nostro servizio è dunque la condivisione di riferimenti teorici, coerenza del progetto educativo, intenzionalità di scelte condivise. 
                    Una nota di riguardo va poi data alla dimensione emotivo-affettiva delle relazioni educative, quindi all&apos;importanza di assumere, da parte di educatori e insegnanti, 
                    una “postura di ricerca” volta ad esplorare e migliorare l&apos;agire educativo. Nel strutturare lo spazio educativo abbiamo tenuto conto che deve rispondere al bisogno 
                    del bambino di cogliere la creatività che emerge nel gioco e concretizzarla attraverso il contesto e i materiali. Per soddisfare i bisogni di rassicurazione e 
                    contenimento emotivo gli spazi saranno caratterizzati da zone differenziate per attività e stimoli che noi definiamo contesti.
                </p>
                <p>
                    Alla sezione Primavera sono ammessi i bambini che hanno compiuto i 2 anni, avranno dunque precedenza i primi 20 bambini iscritti secondo l&apos;età anagrafica.
                </p>
                <h3>Attività</h3>
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
                    {playGround.map((image, i) => (
                        <motion.img
                            layoutId= {`playGround-${i}`}
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
                <h3>Servizi e fasciatoi</h3>
                <Masonry
                    breakpointCols={{ default: 3, 768: 2, 480: 1 }}
                    className={classes.masonryGrid}
                    columnClassName={classes.masonryColumn}
                >
                    {bathsAndChanging.map((image, i) => (
                        <motion.img
                            layoutId= {`bathsAndChanging-${i}`}
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
                <h3>Giardino</h3>
                <Masonry
                    breakpointCols={{ default: 3, 768: 2, 480: 1 }}
                    className={classes.masonryGrid}
                    columnClassName={classes.masonryColumn}
                >
                    {externals.map((image, i) => (
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
                <Lightbox noScroll={{ disabled: true }} open={isBoxOpen} index={index} close={() => setIsBoxOpen(false)} slides={totalImages} />
            </div>
        </main>
    );
}

export default SpringPage;