import classes from "./page.module.scss";
import PageHeader from "@/components/atoms/page-header/PageHeader";

const PlanningPage = () => {
    return (
        <main>
            <PageHeader title="Progettazione educativa"/>
            <div className={classes.pageContent}>
                <p>Di seguito è visualizzato il documento riportante le informazioni riguardanti l'offerta formativa del nostro centro.</p>
                <iframe src="/documents/progettazione/ptof22-25.pdf#pagemode=none" width="auto" height="600px"/>
            </div>
        </main>
    );
}

export default PlanningPage;