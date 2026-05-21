'use client';

import PageHeader from "@/components/atoms/page-header/PageHeader";
import classes from "./page.module.scss";

const StaffPage = () => {
    return (
        <main>
            <PageHeader title="Personale" />
            <div className={classes.pageContent}>
                <h2>Organigramma</h2>
                <div className={classes.staff}>
                    <div className={classes.topHierarchy}>
                        <h4>Legale Rappresentante</h4>
                        <p>Don Alberto Salvan</p>
                    </div>
                    <svg className={classes.connector} viewBox="0 0 10 30" preserveAspectRatio="none">
                        <line x1="5" y1="0" x2="5" y2="30" stroke="black" strokeWidth="0.5" />
                    </svg>
                    <div className={classes.topHierarchy}>
                        <h4>Coordinatrice</h4>
                        <p>Dr. Laura Favero</p>
                    </div>
                    <svg className={classes.branchConnector} viewBox="0 0 400 80" preserveAspectRatio="none">
                        <line x1="200" y1="0" x2="200" y2="30" stroke="black" strokeWidth="0.5" />
                        <line x1="67" y1="30" x2="333" y2="30" stroke="black" strokeWidth="0.5" />
                        <line x1="67" y1="30" x2="67" y2="80" stroke="black" strokeWidth="0.5" />
                        <line x1="200" y1="30" x2="200" y2="80" stroke="black" strokeWidth="0.5" />
                        <line x1="333" y1="30" x2="333" y2="80" stroke="black" strokeWidth="0.5" />
                    </svg>
                    <svg className={classes.branchConnectorMobile} viewBox="0 0 400 80" preserveAspectRatio="none">
                        <line x1="200" y1="0" x2="200" y2="30" stroke="black" strokeWidth="0.5" />
                        <line x1="100" y1="30" x2="300" y2="30" stroke="black" strokeWidth="0.5" />
                        <line x1="100" y1="30" x2="100" y2="80" stroke="black" strokeWidth="0.5" />
                        <line x1="300" y1="30" x2="300" y2="80" stroke="black" strokeWidth="0.5" />
                    </svg>
                    <div className={classes.actualStaff}>
                        <div className={classes.staffCategory}>
                            <h4>Educatrici</h4>
                            <p>Gabriella Campagnolo</p>
                            <p>Cristiana Lucon</p>
                            <p>Lisa Miotto</p>
                            <p>Monica Antonello</p>
                            <p>Marilena Zandarin</p>
                            <p>Barbara Tonello</p>
                            <p>Elisa Filipetto</p>
                            <p>Marika Zulian</p>
                            <p>Manuela Lago</p>
                            <p>Eleonora Monegato</p>
                            <p>Elena Reato</p>
                        </div>
                        <div className={classes.staffCategory}>
                            <h4>Cuoche</h4>
                            <p>Martina Cimador</p>
                            <p>Ida Salvalaggio</p>
                        </div>
                        <div className={classes.staffCategory}>
                            <h4>Addette alle pulizie</h4>
                            <p>Michela Gazzola</p>
                            <p>Giovanna Destro</p>
                            <p>Sonia Affili</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default StaffPage;
