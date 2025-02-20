'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import classes from "./MobileNavbar.module.scss";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import BlackOpaqueBackground from "@/components/atoms/black-opaque-background/BlackOpaqueBackground";

/**
 * Desktop navbar.
 * @returns the mobile navbar render.
 */
const MobileNavbar = () => {
    /**
     * To manage the menu dropdown.
     */
    const [isMenuDroppedDown, setIsMenuDropdown] = useState(false);
    /**
     * To detect the animation breakpoints. 
     */
    const [scope, animate] = useAnimate();
    /**
     * To manage the years dropdown. 
     */
    const [yearDropdown, setYearDropdown] = useState(false);
    /**
     * To navigate imperatively
     */
    const router = useRouter();

    /**
     * Function that modify the isMenuDroppedDown on click.
     */
    function handleMenuDropDown(path: string): void {
        if (isMenuDroppedDown) {
            animate("div", { opacity: 0 }, { duration: 0.3 });
            setIsMenuDropdown(false);
            if (path !== "") {
                setTimeout(() => {
                    router.push(path);
                }, 400);
            }
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
            setTimeout(() => { }, 300);
            setIsMenuDropdown(false);
        }
    }

    /**
     * Dropdowns or retrieves the dropdown menu
     */
    function manageYearDropdown(): void {
        if ( yearDropdown) {
            setYearDropdown(false)
        } else {
            setYearDropdown(true);
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
            <motion.div className={classes.mobileNavbarContainer} id="mobileNav">
                <div className={classes.headerSection}>
                    <p>Menu</p>
                    <div className={classes.menu} onClick={() => { handleMenuDropDown("") }}>
                        <span className={`${classes.line1} ${isMenuDroppedDown && classes.toggleLine1}`} />
                        <span className={`${isMenuDroppedDown && classes.toggleLine2}`} />
                        <span className={`${classes.line3} ${isMenuDroppedDown && classes.toggleLine3}`} />
                    </div>
                </div>
                <AnimatePresence>
                    {
                        isMenuDroppedDown &&
                        <motion.div
                            layout
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
                                <a key="home-link" className={`${classes.link} ${classes.top}`} onClick={() => { handleMenuDropDown("/") }} href={"/"}>Home</a>
                                <div className={classes.yearsDropdown} onClick={manageYearDropdown}>
                                    <div className={classes.dropdownTrigger}>
                                        <p>Classi</p>
                                        <motion.svg height={10} width={10} xmlns="http://www.w3.org/2000/svg" animate={{ transform: `rotate(${yearDropdown ? 180 : 0}deg)` }} >
                                            <polygon points="0,0 10,0 5,10" className={classes.modulesSelectorArrow} />
                                        </motion.svg>
                                    </div>
                                    <AnimatePresence>
                                        {
                                            yearDropdown &&
                                            <motion.div className={`${classes.yearsLinkContainer}`}
                                                initial={{
                                                    opacity: 0,
                                                    height: 0,
                                                    marginTop: 0,
                                                    marginBottom: 0
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    height: 90,
                                                    marginTop: 10,
                                                    marginBottom: 10
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    height: 0,
                                                    marginTop: 0,
                                                    marginBottom: 0
                                                }}
                                                transition={{
                                                    duration: 0.3
                                                }}
                                            >
                                                <a key="nursery-link" onClick={() => { handleMenuDropDown("/nido") }} className={classes.dropdownLink}>Nido</a>
                                                <a key="spring-link" onClick={() => { handleMenuDropDown("/sezione-primavera") }} className={classes.dropdownLink}>Sezione privamera</a>
                                                <a key="childhood-link" onClick={() => { handleMenuDropDown("/scuola-infanzia") }} className={classes.dropdownLink}>Scuola dell&apos;infanzia</a>
                                            </motion.div>
                                        }
                                    </AnimatePresence>
                                </div>
                                <a key="services-link" className={classes.link} onClick={() => { handleMenuDropDown("/carta-servizi") }} >Carta dei servizi</a>
                                <a key="planning-link" className={classes.link} onClick={() => { handleMenuDropDown("/progettazione") }} >Progettazione</a>
                                <a key="rules-link" className={classes.link} onClick={() => { handleMenuDropDown("/regolamento") }}>Regolamento</a>
                                <a key="lunch-link" className={classes.link} onClick={() => { handleMenuDropDown("/pasti") }} >Pasti</a>
                                <a key="modules-link" className={classes.link} onClick={() => { handleMenuDropDown("/modulistica") }} >Modulistica</a>
                                <a key="contacts-link" className={`${classes.link} ${classes.bottom}`} onClick={() => { handleMenuDropDown("#footer") }}>Contatti</a>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence >
            </motion.div >
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