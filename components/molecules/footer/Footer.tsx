import classes from "./Footer.module.scss";

/**
 * Component that renders the footer
 * @returns the rendering pf the footer
 */
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
                        <p>Partita IVA: 2323232323</p>
                    </div>
                </div>
                <div className={classes.footerInfoComponent}>
                    <h3>Social</h3>
                    <div className={classes.footerInfoComponentContent}>
                        <div className={classes.social}>
                            <img className={classes.socialLogo} src="/svgs/whatsapp.svg" />
                            <p>Whatsapp</p>
                        </div>
                        <div className={classes.social}>
                            <img className={classes.socialLogo} src="/svgs/telegram.svg" />
                            <p>Telegram</p>
                        </div>
                        <div className={classes.social}>
                            <img className={classes.socialLogo} src="/svgs/instagram.svg" />
                            <p>Instagram</p>
                        </div>
                        <div className={classes.social}>
                            <img className={classes.socialLogo} src="/svgs/facebook.svg" />
                            <p>Facebook</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.anchor}>
                <p>Copyright &#169; 2025</p>
                <p>&nbsp;Parrocchia di Villa del Conte</p>
                <p className={classes.dash}>&nbsp;-&nbsp;</p>
                <p>Credits by Damiano Caon</p>
            </div>
        </div>
    );
}

export default Footer;