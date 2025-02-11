'use client';

import Link from "next/link";
import classes from "./DesktopNavbar.module.scss";

/**
 * Desktop navbar.
 * @returns the desktop navbar render.
 */
const DesktopNavbar = () => {

    /**
     * Scroll into view of the footer.
     */
    function scrollToFooter(): void {
        document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div
            className={classes.desktopNavbarContainer}
            id="desktopNav"
        >
            <nav className={classes.desktopNavbar}>
                <Link className={`${classes.link} ${classes.left}`} href={"/"}>Home</Link>
                <Link className={classes.link} href={"/carta-servizi"}>Carta dei servizi</Link>
                <Link className={classes.link} href={"/progettazione"}>Progettazione</Link>
                <Link className={classes.link} href={"/regolamento"}>Regolamento</Link>
                <Link className={classes.link} href={"/pasti"}>Pasti</Link>
                <Link className={classes.link} href={"/modulistica"}>Modulistica</Link>
                <span className={`${classes.link} ${classes.right}`} onClick={scrollToFooter}>Contatti</span>
            </nav>
        </div>
    );
};

export default DesktopNavbar;