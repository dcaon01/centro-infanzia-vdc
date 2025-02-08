
'use client';

import Link from "next/link";
import classes from "./not-found.module.scss";

/**
 * Page the manage the page that are not found.
 * @returns the render of the page.
 */
const NotFoundPage = () => {

    return (
        <main>
            <div className={classes.notFound}>
                <img className={classes.notFoundImage} src="/svgs/bambino-notfound.svg"/>
                <h1>Ops..</h1>
                <p>Questa pagina non è stata trovata</p>
                <Link className={classes.backHome} href={"/"}>Torna alla home</Link>
            </div>
        </main>
    );
}

export default NotFoundPage;