import { Link } from "react-router-dom"

export default function Nav({ isNavVisible, setIsNavVisible }) {
    function handleHideNavButton() {
        setIsNavVisible(false);
    }

    function handleNav() {
        window.scrollTo(0, 0);
    }

    const styleNavContainer = {
        left: isNavVisible ? "0%" : "100%"
    }

    return (
        <div id="nav-container" style={styleNavContainer}>
            <div id="hide-nav-button" onClick={handleHideNavButton}>
                <div></div>
                <div></div>
            </div>
            <nav onClick={handleNav}>
                <Link to="/" id="nav-link-home">Home</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    )
}