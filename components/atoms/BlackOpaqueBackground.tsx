import React, { MouseEventHandler } from "react";
import { motion } from "motion/react";

interface props {
    funct: React.MouseEventHandler<HTMLDivElement>,
}

/**
 * Background to be render once opened something.
 * @param funct function that we want to be called 
 * once clicked on it, based on the parent component
 * which triggers it.
 */
const BlackOpaqueBackground: React.FC<props> = ({ funct }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            style={{
                width: "100%",
                height: "100%",
                position: "fixed",
                top: "0px",
                left: "0px",
                zIndex: 9,
                backgroundColor: "black"
            }}
            onClick={funct}
        />
    );
};

export default BlackOpaqueBackground