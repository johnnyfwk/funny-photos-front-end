import { Link } from "react-router-dom";

export default function Footer({
    numberOfPhotosToDisplayAndIncrement,
    setQuery,
    setPageNumber,
    setPhotos,
    setNumberOfPhotosToDisplay,
    setPhotosToDisplay,
    categoryInput,
    setCategoryInput,
    setSearchInput,
    tagInput
}) {
    function handleFooterLinks() {
        window.scrollTo(0, 0);
        if (categoryInput !== "all-categories" || tagInput) {
            setQuery("funny");
            setPageNumber(1);
            setPhotos([]);
            setNumberOfPhotosToDisplay(numberOfPhotosToDisplayAndIncrement);
            setPhotosToDisplay([]);
            setCategoryInput("all-categories");
            setSearchInput("");
        }
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