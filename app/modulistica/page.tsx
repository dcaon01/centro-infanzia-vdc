
import classes from "./page.module.scss";
import PageHeader from "@/components/atoms/page-header/PageHeader";

const ModulesPage = () => {
    return (
        <main>
            <PageHeader title="Modulistica" />
            <div className={classes.pageContent}>

                <div className={classes.linksContainer}>
                    <h2>Iscrizioni</h2>
                    <p>- <a href="/documents/subscriptions/iscrizione-nido-2025-2026.pdf" target="_blank" rel="noopener noreferrer" className={classes.link}>Iscrizione nido 2025-2026</a></p>
                    <p>- <a href="/documents/subscriptions/iscrizione-scuola-dellinfanzia-2025-2026.pdf" target="_blank" rel="noopener noreferrer" className={classes.link}>Iscrizione infanzia 2025-2026</a></p>
                    <p>- <a href="/documents/subscriptions/iscrizione-sezione-primavera-2025-2026.pdf" target="_blank" rel="noopener noreferrer" className={classes.link}>Iscrizione sezione primavera 2025-2026</a></p>
                </div>
                <div className={classes.linksContainer}>
                    <h2>Giustifiche</h2>
                    <p>- <a href="/documents/justifications/giustificazione-assenze.pdf" target="_blank" rel="noopener noreferrer" className={classes.link}>Giustificazione di assenza</a></p>
                </div>
                <div className={classes.linksContainer}>
                    <h2>Deleghe</h2>
                    <p>- <a href="/documents/delegations/delega-ritiro.pdf" target="_blank" rel="noopener noreferrer" className={classes.link}>Delega per il ritiro del bambino</a></p>
                </div>
                <div className={classes.linksContainer}>
                    <h2>Diete</h2>
                    <p>- <a href="/documents/diets/moduli-diete-speciali.pdf" target="_blank" rel="noopener noreferrer" className={classes.link}>Richiesta dieta per allergie ed intolleranze</a></p>
                    <p>- <a href="/documents/diets/motivi-etico-religiosi.pdf" target="_blank" rel="noopener noreferrer" className={classes.link}>Richiesta dieta per motivi etico-religiosi</a></p>
                </div>
            </div>
        </main>
    );
}

export default ModulesPage;