import Link from "next/link";
import classes from "./DesktopNavbar.module.scss";

/**
 * Desktop navbar.
 * @returns the desktop navbar render.
 */
const DesktopNavbar = () => {
    return (
        <div 
            className={classes.desktopNavbarContainer}
        >
            <nav className={classes.desktopNavbar}>
                <Link className={`${classes.link} ${classes.left}`} href={"/"}>Home</Link>
                <Link className={classes.link} href={"/servizi"}>Servizi</Link>
                <Link className={classes.link} href={"/progettazione"}>Progettazione</Link>
                <Link className={classes.link} href={"/regolamento"}>Regolamento</Link>
                <Link className={classes.link} href={"/menu"}>Pasti</Link>
                <Link className={classes.link} href={"/modulistica"}>Modulistica</Link>
                <Link className={`${classes.link} ${classes.right}`} href={"/contatti"}>Contatti</Link>
            </nav>
        </div>
    );
};

export default DesktopNavbar;