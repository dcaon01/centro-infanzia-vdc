'use client';

import Link from "next/link";
import classes from "./DesktopNavbar.module.scss";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

/**
 * Desktop navbar.
 * @returns the desktop navbar render.
 */
const DesktopNavbar = () => {
    /**
     * To manage the dropping down of the years.
     */
    const [yearDropdown, setYearDropdown] = useState(false);

    /**
     * Scroll into view of the footer.
     */
    function scrollToFooter(): void {
        if (yearDropdown) {
            setYearDropdown(false);
        }
        document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    }

    /**
     * Dropdowns or retrieves the dropdown menu.
     */
    function manageYearDropdown(): void {
        if (yearDropdown) {
            setYearDropdown(false)
        } else {
            setYearDropdown(true);
        }
    }

    return (
        <div
            className={classes.desktopNavbarContainer}
            id="desktopNav"
        >
            <nav className={classes.desktopNavbar}>
                <Link className={`${classes.link} ${classes.left}`} href={"/"}>Home</Link>
                <div className={`${classes.link} ${classes.dropdownTrigger}`} onClick={manageYearDropdown}>
                    <AnimatePresence>
                        {
                            yearDropdown &&
                            <motion.div className={classes.dropdown} 
                                initial={{
                                    y: 100,
                                    opacity: 0
                                }}
                                animate= {{
                                    y: 70,
                                    opacity: 1
                                }}
                                exit={{
                                    y: 100,
                                    opacity: 0
                                }}
                            >
                                <Link className={classes.dropdownLink} href={"/nido"} onClick={() => {setYearDropdown(false)}}>Nido</Link>
                                <Link className={classes.dropdownLink} href={"/sezione-primavera"} onClick={() => {setYearDropdown(false)}}>Sezione primavera</Link>
                                <Link className={classes.dropdownLink} href={"/scuola-infanzia"} onClick={() => {setYearDropdown(false)}}>Scuola dell&apos;infanzia</Link>
                            </motion.div>
                        }
                    </AnimatePresence>
                    <p className={classes.linkText}>Classi</p>
                    <motion.svg height={10} width={10} xmlns="http://www.w3.org/2000/svg" animate={{ transform: `rotate(${yearDropdown ? 180 : 0}deg)` }} >
                        <polygon points="0,0 10,0 5,10" className={classes.modulesSelectorArrow} />
                    </motion.svg>
                </div>
                <Link className={classes.link} href={"/carta-servizi"} onClick={() => {setYearDropdown(false)}}>Carta dei servizi</Link>
                <Link className={classes.link} href={"/progettazione"} onClick={() => {setYearDropdown(false)}}>Progettazione</Link>
                <Link className={classes.link} href={"/regolamento"} onClick={() => {setYearDropdown(false)}}>Regolamento</Link>
                <Link className={classes.link} href={"/pasti"} onClick={() => {setYearDropdown(false)}}>Pasti</Link>
                <Link className={classes.link} href={"/modulistica"} onClick={() => {setYearDropdown(false)}}>Modulistica</Link>
                <span className={`${classes.link} ${classes.right}`} onClick={scrollToFooter}>Contatti</span>
            </nav>
        </div>
    );
};

export default DesktopNavbar;