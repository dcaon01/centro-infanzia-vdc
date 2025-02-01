import React from "react";
import classes from "./Footer.module.scss";

interface props {}

const Footer: React.FC<props> = () => {
    return (
        <div className={classes.footerContainer}>
            <div className={classes.footerComponent}>
                <h3>Indirizzo</h3>
            </div>
            <div className={classes.footerComponent}>
                <h3>Contatti</h3>
            </div>
            <div className={classes.footerComponent}>
                <h3>Social</h3>
            </div>
        </div>
    );
}

export default Footer;