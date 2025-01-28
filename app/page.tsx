'use client';

import styles from "./page.module.scss";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <div className={styles.hookContainer}>
        <motion.div
          initial={{
            y: -30,
          }}
          animate={{
            y: 0
          }}
          className={styles.titleContainer}
        >
          <p>Scuola</p>
          <p>Almarosa Rech</p>
        </motion.div>
      </div>
    </main>
  );
}
