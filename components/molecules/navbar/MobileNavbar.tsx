'use client';

import { useState } from "react";
import classes from "./MobileNavbar.module.scss";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import Link from "next/link";
import BlackOpaqueBackground from "@/components/atoms/black-opaque-background/BlackOpaqueBackground";

/**
 * Desktop navbar.
 * @returns the mobile navbar render.
 */
const MobileNavbar = () => {
    // To manage the menu dropdown.
    const [isMenuDroppedDown, setIsMenuDropdown] = useState(false);
    // To detect the animation breakpoints.
    const [scope, animate] = useAnimate();

    /**
     * Function that modify the isMenuDroppedDown on click.
     */
    function handleMenuDropDown(): void {
        if (isMenuDroppedDown) {
            animate("div", { opacity: 0 }, { duration: 0.3 });
            setTimeout(() => {}, 300);
            setIsMenuDropdown(false);
        } else {
            setIsMenuDropdown(true);
        }
    }

    /**
     * Function tha handles the deselection of a menu.
     */
    function handleMenuDeselection(): void {
        if (isMenuDroppedDown) {
            animate("div", { opacity: 0 }, { duration: 0.3 });
            setTimeout(() => {}, 300);
            setIsMenuDropdown(false);
        }
    }

    /**
     * Function that animate the appearance of the links section.
     */
    function animateLinksPresence(): void {
        animate("div", { opacity: 1 }, { duration: 0.3 });
    }

    return (
        <>
            <motion.div className={classes.mobileNavbarContainer}>
                <div className={classes.headerSection}>
                    <p>Menu</p>
                    <div className={classes.menu} onClick={handleMenuDropDown}>
                        <span className={`${classes.line1} ${isMenuDroppedDown && classes.toggleLine1}`} />
                        <span className={`${isMenuDroppedDown && classes.toggleLine2}`} />
                        <span className={`${classes.line3} ${isMenuDroppedDown && classes.toggleLine3}`} />
                    </div>
                </div>
                <AnimatePresence>
                    {
                        isMenuDroppedDown &&
                        <motion.div
                            className={classes.linkSection}
                            initial={{
                                margin: 0,
                                height: 0,
                            }}
                            animate={{
                                margin: 20,
                                height: "auto",
                            }}
                            exit={{
                                margin: 0,
                                height: 0,
                            }}
                            transition={{
                                duration: 0.3
                            }}
                            onAnimationComplete={animateLinksPresence}
                            ref={scope}
                        >
                            <div className={classes.linkContainer} style={{ opacity: 0 }}>
                                <Link className={`${classes.link} ${classes.top}`} onClick={handleMenuDropDown} href={"/"}>Home</Link>
                                <Link className={classes.link} onClick={handleMenuDropDown} href={"/servizi"}>Servizi</Link>
                                <Link className={classes.link} onClick={handleMenuDropDown} href={"/progettazione"}>Progettazione</Link>
                                <Link className={classes.link} onClick={handleMenuDropDown} href={"/regolamento"}>Regolamento</Link>
                                <Link className={classes.link} onClick={handleMenuDropDown} href={"/menu"}>Pasti</Link>
                                <Link className={classes.link} onClick={handleMenuDropDown} href={"/modulistica"}>Modulistica</Link>
                                <Link className={`${classes.link} ${classes.bottom}`} onClick={handleMenuDropDown} href={"#footer"}>Contatti</Link>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            </motion.div>
            <AnimatePresence>
                {
                    isMenuDroppedDown &&
                    <BlackOpaqueBackground funct={handleMenuDeselection} />
                }
            </AnimatePresence>
        </>
    );
}

export default MobileNavbar;