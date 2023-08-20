import { Link } from "react-router-dom";

export default function Footer() {
    function handleFooterLinks() {
        window.scrollTo(0, 0);
    }

    return (
        <footer className="max-width">
            <div className="footer-links" onClick={handleFooterLinks}>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </div>
            <div id="copyright">Copyright &copy; {new Date().getFullYear()} FunnyPhotos.co.uk. All Rights Reserved.</div>
        </footer>
    )
}