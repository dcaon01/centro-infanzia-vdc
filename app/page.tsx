'use client';

import styles from "./page.module.scss";
import { motion } from "motion/react";
/**
 * Components that renders the home page
 * @returns the home page render.
 */
export default function Home() {
  return (
    <main>
      <div className={styles.hookContainer}>
        {/* <video>
          <source></source>
        </video> */}
        <img 
          className={`${styles.cloud} ${styles.c1}`} 
          src="/svgs/nuvola-disegnata.svg" 
        />
        <img 
          className={`${styles.cloud} ${styles.c2}`} 
          src="/svgs/nuvola-disegnata.svg" 
        />
        <motion.div
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
          className={styles.titleContainer}
        >
          <p  className={styles.p1}>Scuola</p>
          <p className={styles.p2}>Almarosa Rech</p>
          <p className={styles.vdc}>Villa del Conte</p>
        </motion.div>
      </div>
    </main>
  );
}
