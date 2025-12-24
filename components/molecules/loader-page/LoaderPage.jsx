import classes from './LoaderPage.module.scss';
import { LoaderCircle } from 'lucide-react';

const LoaderPage = () => {
    return (
        <div className={classes.loaderPage}>
            <LoaderCircle className={classes.loaderCircle} size={24}></LoaderCircle>
        </div>
    );
}

export default LoaderPage;