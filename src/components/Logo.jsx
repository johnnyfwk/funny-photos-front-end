import { Link } from "react-router-dom";

export default function Logo({
    numberOfPhotosToDisplayAndIncrement,
    query,
    setQuery,
    setPageNumber,
    setPhotos,
    setNumberOfPhotosToDisplay,
    setPhotosToDisplay,
    setCategoryInput,
    setSearchInput
}) {
    function handleLogo() {
        if (query !== "funny") {
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
        <Link to="/" onClick={handleLogo} id="logo">FunnyPhotos.co.uk</Link>
    )
}