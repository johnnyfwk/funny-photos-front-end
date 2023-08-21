import { useNavigate } from "react-router-dom";
import categories from "../content/categories";
import * as utils from "../utils";

export default function Categories({
    numberOfPhotosToDisplayAndIncrement,
    categoryInput,
    setCategoryInput,
    setQuery,
    setPageNumber,
    setPhotos,
    setNumberOfPhotosToDisplay,
    setPhotosToDisplay,
    setSearchInput
}) {
    const navigate = useNavigate();

    function handleCategoryInput(event) {
        setCategoryInput(event.target.value);
        setPageNumber(1);
        setNumberOfPhotosToDisplay(numberOfPhotosToDisplayAndIncrement);
        setPhotos([]);
        setPhotosToDisplay([]);
        setSearchInput("");
        if (event.target.value === "all-categories") {
            setQuery("funny");
            navigate("/");
        } else {
            setQuery("funny " + event.target.value);
            navigate(`/?category=${event.target.value}`);
        }
    }

    return (
        <select name="categories" id="categories" value={categoryInput} onChange={handleCategoryInput}>
            <option value="all-categories">All Categories</option>
            {categories.map((category) => {
                return <option key={category} value={utils.convertHeadingToSlug(category)}>{category}</option>
            })}
        </select>
    )
}