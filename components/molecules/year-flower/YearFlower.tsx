import { motion } from "motion/react";
import React from "react";
import classes from "./YearFlower.module.scss";

interface props {
    title: string,
    description: string,
    delay: number
}

const YearFlower: React.FC<props> = ({ title, description, delay }) => {
    return (
        <div className={classes.year}
        >
            <motion.img className={classes.flower} src="/svgs/fiore.svg" 
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
                    duration: 0.7
                }}
            />
            <img className={classes.land} src="/svgs/terreno.svg" />
        </div>
    );
};

export default YearFlower;