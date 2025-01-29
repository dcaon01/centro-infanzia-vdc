'use client';

import classes from "./page.module.scss";
import { motion } from "motion/react";
/**
 * Components that renders the home page
 * @returns the home page render.
 */
export default function Home() {
  return (
    <main>
      <div className={classes.hookContainer}>
        <img 
          className={classes.sun} 
          src="/svgs/sole-hook.svg" 
        />
        <img 
          className={`${classes.cloud} ${classes.c1}`} 
          src="/svgs/nuvola-disegnata.svg" 
        />
        <img 
          className={`${classes.cloud} ${classes.c2}`} 
          src="/svgs/nuvola-disegnata.svg" 
        />
        <motion.div
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
          <p className={classes.p1}>Scuola</p>
          <p className={classes.p2}>Almarosa Rech</p>
          <p className={classes.vdc}>Villa del Conte</p>
        </motion.div>
        <motion.img 
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
        <motion.img 
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
      <div>

      </div>
    </main>
  );
}
