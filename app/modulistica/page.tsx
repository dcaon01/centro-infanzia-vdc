
import classes from "./page.module.scss";
import PageHeader from "@/components/atoms/page-header/PageHeader";

const ModulesPage = () => {
    return (
        <main>
            <PageHeader title="Modulistica"/>
            <div className={classes.pageContent}>
                <h2>Iscrizioni</h2>
                <p>Le iscrizioni vanno consegnate in allegato alla mail che si può trovare nella sezione &quot;contatti&quot;.</p>
                <p>- <a href="/documents/subscription/iscrizione-nido-2025-2026.pdf" target="_blank" rel="noopener noreferrer"  className={classes.link}>Iscrizione nido 2025-2026</a></p>
                <p>- <a href="/documents/subscription/iscrizione-scuola-dellinfanzia-2025-2026.pdf" target="_blank" rel="noopener noreferrer" className={classes.link}>Iscrizione infanzia 2025-2026</a></p>
                <p>- <a href="/documents/subscription/iscrizione-sezione-primavera-2025-2026.pdf" target="_blank" rel="noopener noreferrer" className={classes.link}>Iscrizione sezione primavera 2025-2026</a></p>
            </div>
        </main>
    );
}

export default ModulesPage;