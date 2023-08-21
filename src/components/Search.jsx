import { useNavigate } from "react-router-dom";

export default function Search({
    numberOfPhotosToDisplayAndIncrement,
    searchInput,
    setSearchInput,
    setQuery,
    setPageNumber,
    setPhotos,
    setNumberOfPhotosToDisplay,
    setPhotosToDisplay,
    setCategoryInput
}) {
    const navigate = useNavigate();

    function handleSearchInput(event) {
        setSearchInput(event.target.value);
    }

    function handleSearchButton() {
        console.log("funny " + searchInput);
        setQuery("funny " + searchInput);
        setPageNumber(1);
        setPhotos([]);
        setNumberOfPhotosToDisplay(numberOfPhotosToDisplayAndIncrement);
        setPhotosToDisplay([]);
        setCategoryInput("all-categories");
        setSearchInput("");
        navigate(`/?search=${searchInput}`);
    }

    return (
        <form id="search">
            <input
                type="text"
                id="search-input"
                name="search-input"
                value={searchInput}
                onChange={handleSearchInput}
                placeholder="Search funny photos"
            />
            <button
                type="button"
                onClick={handleSearchButton}
                disabled={!searchInput}
            >Search</button>
        </form>
    )
}