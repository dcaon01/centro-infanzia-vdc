
import ModuleRow from "@/components/atoms/module-row/ModuleRow";
import classes from "./page.module.scss";
import PageHeader from "@/components/atoms/page-header/PageHeader";

const ModulesPage = () => {
    return (
        <main>
            <PageHeader title="Modulistica" />
            <div className={classes.pageContent}>
                <div className={classes.linksContainer}>
                    <h2>Iscrizioni</h2>
                    <ModuleRow 
                        text="Iscrizione nido 2025-2026"
                        url="/documents/subscriptions/iscrizione-nido-2025-2026.pdf"
                    />
                    <ModuleRow 
                        text="Iscrizione infanzia 2025-2026"
                        url="/documents/subscriptions/iscrizione-scuola-dellinfanzia-2025-2026.pdf"
                    />
                    <ModuleRow 
                        text="Iscrizione sezione primavera 2025-2026"
                        url="/documents/subscriptions/iscrizione-sezione-primavera-2025-2026.pdf"
                    />
                </div>
                <div className={classes.linksContainer}>
                    <h2>Giustifiche</h2>
                    <ModuleRow 
                        text="Giustificazione di assenza"
                        url="/documents/justifications/giustificazione-assenze.pdf"
                    />
                </div>
                <div className={classes.linksContainer}>
                    <h2>Deleghe</h2>
                    <ModuleRow 
                        text="Delega per il ritiro del bambino"
                        url="/documents/delegations/delega-ritiro.pdf"
                    />
                </div>
                <div className={classes.linksContainer}>
                    <h2>Diete</h2>
                    <ModuleRow 
                        text="Richiesta dieta per allergie ed intolleranze"
                        url="/documents/diets/moduli-diete-speciali.pdf"
                    />
                    <ModuleRow 
                        text="Richiesta dieta per motivi etico-religiosi"
                        url="/documents/diets/motivi-etico-religiosi.pdf"
                    />
                </div>
                <div className={classes.linksContainer}>
                    <h2>Lettere</h2>
                    <ModuleRow 
                        text="Lettera di ambientamento"
                        url="/documents/letters/lettera-di-ambientamento.pdf"
                    />
                </div>
                <div className={classes.linksContainer}>
                    <h2>Salute</h2>
                    <ModuleRow 
                        text="Manuale prevenzione malattie infettive"
                        url="/documents/health/Manuale-PrevenzioneMalattie-Infettive-della-Regione-Veneto.pdf"
                    />
                    <ModuleRow 
                        text="Richiesta di somministrazione farmaci"
                        url="/documents/health/MODELLO-A1-somministrazione-farmaci.pdf"
                    />
                    <ModuleRow 
                        text="Prescrizione del medico curante alla somministrazione di farmaci in ambito scolastico"
                        url="/documents/health/MODELLO-A2-Richiesta-medico.pdf"
                    />
                    <ModuleRow 
                        text="Liberatoria"
                        url="/documents/health/MODELLO-A3-liberatoria.pdf"
                    />
                </div>
            </div>
        </main>
    );
}

export default ModulesPage;