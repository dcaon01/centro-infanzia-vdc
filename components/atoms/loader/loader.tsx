import classes from "./loader.module.scss";

/**
 * Component that renders a loader animated circle.
 * @returns the rendering of the loader component.
 */
const Loader = () => {
    return (
        <div className={classes.allViewContainer}>
            <svg className={classes.loadingContainer}>
                <circle className={classes.loadingCircle} cx="50" cy="50" r="50"></circle>
            </svg>
        </div>
    );
}

export default Loader;