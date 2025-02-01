import classes from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={classes.footerContainer}>
            <div className={classes.footerInfo}>
                <div className={classes.footerInfoComponent}>
                    <h3>Indirizzo</h3>
                    <div className={classes.footerInfoComponentContent}>
                        <p>Via Roma, 69, 35010</p>
                        <p>Villa del Conte PD</p>
                    </div>
                </div>
                <div className={`${classes.footerInfoComponent} ${classes.central}`}>
                    <h3>Contatti</h3>
                    <div className={classes.footerInfoComponentContent}>
                        <p>Telefono: 049 574 4064</p>
                        <p>Email: asilo@email.com</p>
                    </div>
                </div>
                <div className={classes.footerInfoComponent}>
                    <h3>Social</h3>
                    <div className={classes.footerInfoComponentContent}>
                        <p>Telefono: 049 574 4064</p>
                        <p>Email: asilo@email.com</p>
                    </div>
                </div>
            </div>
            <div className={classes.anchor}>
                <p>Copyright &#169; 2025 Parrocchia di Villa del Conte - Credits by Damiano Caon</p>
            </div>
        </div>
    );
}

export default Footer;