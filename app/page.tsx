'use client';

import { useEffect } from "react";
import YearFlower from "@/components/molecules/year-flower/YearFlower";
import classes from "./page.module.scss";
import { motion, useScroll, useTransform } from "motion/react";

/**
 * Components that renders the home page
 * @returns the home page render.
 */
const HomePage = () => {
  // To monitor the page scrolling
  const { scrollYProgress } = useScroll();
  // useTransform monitor the progress of the scrolling (in this case) from 0 to 50% of it.
  const opacity = useTransform(scrollYProgress, [0, 0.5], ["0", "0.5"]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -200]);

  // We try to prevent refresh-related bugs by setting the 
  // scroll at the top of the page at every refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className={classes.hookContainer}>
        <motion.div className={classes.shadowBox} style={{ opacity: opacity }} />
        <motion.img
          className={classes.sun}
          layoutId="sun"
          src="/svgs/sole-hook.svg"
          animate={{
            transform: ["scale(1)", "scale(1.1)"]
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.img
          className={`${classes.cloud} ${classes.c1}`}
          src="/svgs/nuvola-disegnata.svg"
          layoutId="c1"
          animate={{
            transform: ["translateY(0)", "translateY(-3vh)"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.img
          className={`${classes.cloud} ${classes.c2}`}
          src="/svgs/nuvola-disegnata.svg"
          layoutId="c2"
          animate={{
            transform: ["translateY(0)", "translateY(-3vh)"]
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div layoutId="titleContainer"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5
          }}
          className={classes.titleContainer}
        >
          <h2 className={classes.p1}>Centro Infanzia</h2>
          <p className={classes.vdc}>Suor</p>
          <h1 className={classes.p2}>ALMAROSA RECH</h1>
        </motion.div>
        <motion.img layoutId="hill"
          className={`${classes.hill}`}
          src="/svgs/collina.svg"
          initial={{
            opacity: 0,
            y: +30,
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5
          }}
        />
        <motion.img layoutId="children"
          className={`${classes.children}`}
          src="/svgs/bambini.svg"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 0.5
          }}
        />
      </div>
      <motion.div className={classes.yearsContainer} style={{ y: y }} layoutId="yearsContainer">
        <img className={classes.topEdge} src="/svgs/bordo.svg" />
        <div className={classes.yearsSection}>
          {/* Nido */}
          <YearFlower title={"Nido"} description={"Da 3 a 36 mesi"} delay={0} />
          <YearFlower title={"Sezione primavera"} description={"Da 24 a 36 mesi"} delay={0.1} />
          <YearFlower title={"Scuola dell'infanzia"} description={"Da 3 a 6 anni"} delay={0.2} />
        </div>
        <img className={classes.bottomEdge} src="/svgs/bordo.svg" />
      </motion.div>
      <div className={classes.pageContent}>
        <div className={classes.section}>
          <h2>Benvenuti</h2>
          <p>
            Benvenui sul sito del <b>Centro Infanzia Suor Almarosa Rech</b> di Villa del Conte, dove
            potrete trovare tutte le informazioni che state cercando sulla nostra struttura.
          </p>
        </div>
        <div className={classes.section}>
          <h2>Il personale</h2>
          <div className={classes.staff}>
            <div className={classes.topHierarchy}>
              <h4>Legale Rappresentante</h4>
              <p>Don Alberto Salvan</p>
            </div>
            <svg className={classes.connector} viewBox="0 0 10 30" preserveAspectRatio="none">
              <line x1="5" y1="0" x2="5" y2="30" stroke="black" strokeWidth="0.5" />
            </svg>
            <div className={classes.topHierarchy}>
              <h4>Coordinatrice</h4>
              <p>Dr. Laura Favero</p>
            </div>
            <svg className={classes.branchConnector} viewBox="0 0 400 80" preserveAspectRatio="none">
              {/* Linea verticale dal coordinatore */}
              <line x1="200" y1="0" x2="200" y2="30" stroke="black" strokeWidth="0.5" />

              {/* Linea orizzontale che si estende */}
              <line x1="50" y1="30" x2="350" y2="30" stroke="black" strokeWidth="0.5" />

              {/* Quattro linee verticali che vanno alle categorie */}
              <line x1="50" y1="30" x2="50" y2="80" stroke="black" strokeWidth="0.5" />
              <line x1="150" y1="30" x2="150" y2="80" stroke="black" strokeWidth="0.5" />
              <line x1="250" y1="30" x2="250" y2="80" stroke="black" strokeWidth="0.5" />
              <line x1="350" y1="30" x2="350" y2="80" stroke="black" strokeWidth="0.5" />
            </svg>
            <div className={classes.actualStaff}>
              <div className={classes.staffCategory}>
                <h4>Educatrici</h4>
                <p>Gabriella Campagnolo</p>
                <p>Cristiana Lucon</p>
                <p>Lisa Miotto</p>
                <p>Monica Antonello</p>
                <p>Marilena Zandarin</p>
                <p>Barbara Tonello</p>
                <p>Elisa Filipetto</p>
                <p>Eleonora Monegato</p>
                <p>Elena Reato</p>
                <p>Marika Zulian</p>
              </div>
              <div className={classes.staffCategory}>
                <h4>Cuoche</h4>
                <p>Martina Cimador</p> 
                <p>Ida Salvalaggio</p>
              </div>
              <div className={classes.staffCategory}>
                <h4>Addette alle pulizie</h4>
                <p>Sabrina Pedron</p>
                <p>Michela Gazzola</p>
                <p>Giovanna Destro</p>
              </div>
              <div className={classes.staffCategory}>
                <h4>Enti</h4>
                <p>UST</p>
                <p>URS</p>
                <p>Regione Veneto</p>
                <p>Ulss</p>
                <p>Amministrazione Comunale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;