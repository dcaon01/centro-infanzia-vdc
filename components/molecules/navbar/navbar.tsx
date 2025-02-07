import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

/**
 * Wrapper fot the two types of navbar.
 * @returns the navbar render.
 */
const Navbar = () => {
    return ( 
        <>
            <DesktopNavbar />
            <MobileNavbar />
        </> 
    );
}

export default Navbar;