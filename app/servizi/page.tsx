import PageHeader from "@/components/atoms/page-header/PageHeader";
import classes from "./page.module.scss";

/**
 * Component that renders the service page
 * @returns the rendering of the service page.
 */
const ServicesPage = () => {
    return (
        <main>
            <PageHeader title="Servizi" />
            <div className={classes.pageContent}>
                
            </div>
        </main>
    );
}

export default ServicesPage;