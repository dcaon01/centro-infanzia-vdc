import Link from "next/link";
import classes from "./navbar.module.scss";

export default function Navbar() {
    return (
        <nav className={classes.navbar}>
            <Link className={classes.link} href={"/"}>
                <div>
                    <p className={classes.text}>
                        Home
                    </p>
                </div>
            </Link>
            <Link href={"/servizi"}>Servizi</Link>
            <Link href={"/progettazione"}>Progettazione</Link>
            <Link href={"/regolamento"}>Regolamento</Link>
            <Link href={"/menu"}>Menù</Link>
            <Link href={"/modulistica"}>Modulistica</Link>
            <Link href={"/contatti"}>Contatti</Link>
        </nav>
    );
};