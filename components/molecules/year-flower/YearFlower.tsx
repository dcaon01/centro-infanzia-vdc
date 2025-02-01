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
                    height: 0,
                }}
                whileInView={{
                    height: 350
                }}
                viewport={{ once: true }}
            />
            <img className={classes.land} src="/svgs/terreno.svg" />
        </div>
    );
};

export default YearFlower;