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
        <h2>Benvenuti!</h2>
        <p>
          Il personale del <b>Centro Infanzia Suor Almarosa Rech</b> di Villa del Conte vi dà il benvenuto!
          Su questo sito potete trovare tutte le informazioni che state cercando sulla nostra struttura.
        </p>
      </div>
    </main>
  );
}

export default HomePage;