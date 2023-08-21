import { Link } from "react-router-dom";

export default function Logo({
    numberOfPhotosToDisplayAndIncrement,
    setQuery,
    setPageNumber,
    setPhotos,
    setNumberOfPhotosToDisplay,
    setPhotosToDisplay,
    categoryInput,
    setCategoryInput
}) {
    function handleLogo() {
        if (categoryInput !== "all-categories") {
            setQuery("funny");
            setPageNumber(1);
            setPhotos([]);
            setNumberOfPhotosToDisplay(numberOfPhotosToDisplayAndIncrement);
            setPhotosToDisplay([]);
            setCategoryInput("all-categories");
        }
    }

    return (
        <Link to="/" onClick={handleLogo} id="logo">FunnyPhotos.co.uk</Link>
    )
}