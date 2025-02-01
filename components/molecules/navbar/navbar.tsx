'use client'

import React from "react";
import Link from "next/link";
import classes from "./navbar.module.scss";
import { motion } from "framer-motion";

interface props {}

const Navbar: React.FC<props> = () => {
    return (
        <motion.div 
            className={classes.navbarContainer}
        >
            <nav className={classes.navbar}>
                <Link className={`${classes.link} ${classes.left}`} href={"/"}>Home</Link>
                <Link className={classes.link} href={"/servizi"}>Servizi</Link>
                <Link className={classes.link} href={"/progettazione"}>Progettazione</Link>
                <Link className={classes.link} href={"/regolamento"}>Regolamento</Link>
                <Link className={classes.link} href={"/menu"}>Menù</Link>
                <Link className={classes.link} href={"/modulistica"}>Modulistica</Link>
                <Link className={`${classes.link} ${classes.right}`} href={"/contatti"}>Contatti</Link>
            </nav>
        </motion.div>
    );
};

export default Navbar;