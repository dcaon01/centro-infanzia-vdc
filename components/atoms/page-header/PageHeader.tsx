'use client';

import React from "react";
import { motion } from "motion/react";
import classes from "./PageHeader.module.scss";

interface props {
    title: string
}

/**
 * Component htat renders dynamically the header of every page
 * (excluded the home page).
 * @param props
 * @returns the render of the component
 */
const PageHeader: React.FC<props> = ({ title }) => {
    return (
        <div className={classes.titleContainer}>
            <motion.h1
                initial={{
                    opacity: 0,
                    x: -40
                }}
                animate={{
                    opacity: 1,
                    x: 0
                }}
                transition={{
                    delay: 0.5
                }}
            >
                {title}
            </motion.h1>
        </div>
    );
}

export default PageHeader;