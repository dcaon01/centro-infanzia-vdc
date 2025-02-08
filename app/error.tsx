'use client';

import Link from "next/link";
import classes from "./error.module.scss";

const ErrorPage = () => {
    return (
        <main>
            <div className={classes.notFound}>
                <img className={classes.notFoundImage} src="/svgs/bambina-error.svg"/>
                <h1>Ops..</h1>
                <p>Qualcosa è andato storto</p>
                <Link className={classes.backHome} href={"/"}>Torna alla home</Link>
            </div>
        </main>
    );
}

export default ErrorPage;