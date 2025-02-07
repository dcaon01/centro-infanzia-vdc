import { motion } from "motion/react";
import React from "react";
import classes from "./YearFlower.module.scss";
import { Sour_Gummy } from "next/font/google";
import { spring } from "motion";
import { useRouter } from "next/navigation";
const sour_gummy = Sour_Gummy({ subsets: ['latin'] });

interface props {
    title: string,
    description: string,
    delay: number
}

/**
 * Displays the flowers with the years preview and link to the
 * relative page.
 * @param props
 * @returns the render of the component.
 */
const YearFlower: React.FC<props> = ({ title, description, delay }) => {
    const flowerContentDelay = delay + 0.5 + 0.2;
    /**
     * To redirect to the right pages.
     */
    const router = useRouter();

    /**
     * Redirects to the gallery page.
     */
    function redirectTo() {
        const yearSubpath: string = title.toLowerCase();
        router.push(`/${yearSubpath}`);
    }

    return (
        <div className={classes.year}
        >
            <motion.img className={classes.flower} src="/svgs/fiore.svg" layoutId="flower"
                initial={{
                    bottom: 0,
                    height: '0%',
                    left: 0
                }}
                whileInView={{
                    bottom: 20,
                    left: -10,
                    height: '95%'
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                    delay: delay,
                    type: spring
                }}
            />
            <img className={classes.land} src="/svgs/terreno.svg" />
            <motion.div 
                className={classes.titleDescriptionSection} layoutId="titleDescriptionSection"
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.3,
                    delay: flowerContentDelay
                }}
            >
                <h3 className={classes.title}>
                    {title}
                </h3>
                <p className={classes.description}>{description}</p>
                <button className={`${classes.discoverButton} ${sour_gummy.className}`} onClick={redirectTo}>
                   Scopri
                </button>
            </motion.div>
        </div>
    );
};

export default YearFlower;