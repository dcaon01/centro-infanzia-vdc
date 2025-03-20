'use client';

import React from "react";
import classes from "./ModuleRow.module.scss";
import { Sour_Gummy } from "next/font/google";
const sour_gummy = Sour_Gummy({ subsets: ['latin'] });

interface props {
    text: string,
    url: string,
}

const ModuleRow: React.FC<props> = ({ text, url }) => {

    function handleDocumentDownload() {
        window.open(url,
            "_blank",
            "noopener,noreferrer"
        );
    }

    return (
        <div className={classes.row}>
            <p className={classes.text}>{text}</p>
            <button
                className={`${classes.moduleButton} ${sour_gummy.className}`}
                onClick={handleDocumentDownload}
            >
                Scarica
            </button>
        </div>
    );
}

export default ModuleRow;