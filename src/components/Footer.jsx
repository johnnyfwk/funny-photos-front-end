import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="max-width">
            {/* <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div> */}
            <div id="copyright">Copyright &copy; {new Date().getFullYear()} FunnyPhotos.co.uk. All Rights Reserved.</div>
        </footer>
    )
}