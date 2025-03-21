import classes from "./Footer.module.scss";

/**
 * Component that renders the footer
 * @returns the rendering pf the footer
 */
const Footer = () => {
    return (
        <div className={classes.footerContainer} id="footer">
            <div className={classes.footerInfo}>
                <div className={classes.footerInfoComponent}>
                    <h4>Indirizzo</h4>
                    <div className={classes.footerInfoComponentContent}>
                        <p>Via Roma, 69, 35010</p>
                        <p>Villa del Conte PD</p>
                    </div>
                </div>
                <div className={`${classes.footerInfoComponent} ${classes.central}`}>
                    <h4>Contatti</h4>
                    <div className={classes.footerInfoComponentContent}>
                        <p><b>Telefono:</b> <a href="tel:+390495744064">049 574 4064</a></p>
                        {/* <p><b>Email:</b></p> */}
                        <p className={classes.email}><b>Email:</b><a href="mailto:centroinfanziasuoralmarosarech@gmail.com"> centroinfanziasuoralmarosarech@gmail.com</a></p>
                        <p><b>Cellulare</b>:  <a href="tel:+393899026864">389 902 6864</a></p>
                        <p><b>Partita IVA:</b> 02717180281</p>
                    </div>
                </div>
                <div className={classes.footerInfoComponent}>
                    <h4>Social</h4>
                    <div className={classes.footerInfoComponentContent}>
                        <div className={classes.social}>
                            <img className={classes.socialLogo} src="/svgs/whatsapp.svg" />
                            <p><a href="https://wa.me/393899026864">Whatsapp</a></p>
                        </div>
                        <div className={classes.social}>
                            <img className={classes.socialLogo} src="/svgs/telegram.svg" />
                            <p><a href="https://t.me/+zwJCShp4OcxlMTM8" target="_blank" rel="noopener noreferrer">Telegram</a></p>
                        </div>
                        <div className={classes.social}>
                            <img className={classes.socialLogo} src="/svgs/instagram.svg" />
                            <p><a href="https://www.instagram.com/centroinfanziasuoralmarosarech?igsh=c3JtaTF0azI3NHNo" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                        </div>
                        <div className={classes.social}>
                            <img className={classes.socialLogo} src="/svgs/facebook.svg" />
                            <p><a href="https://www.facebook.com/share/15mqguQvAn/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.anchor}>
                <p>Copyright &#169; 2025</p>
                <p>&nbsp;Parrocchia di Villa del Conte</p>
                <p className={classes.dash}>&nbsp;-&nbsp;</p>
                <p>Created by <a href="https://campsite.bio/damianocaon">Damiano Caon</a></p>
            </div>
        </div>
    );
}

export default Footer;