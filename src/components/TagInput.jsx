import { useNavigate } from "react-router-dom";
import tags from "../content/tags";
import * as utils from "../utils";

export default function TagInput({
    numberOfPhotosToDisplayAndIncrement,
    tagInput,
    setTagInput,
    setQuery,
    setPageNumber,
    setPhotos,
    setNumberOfPhotosToDisplay,
    setPhotosToDisplay
}) {
    const navigate = useNavigate();

    function handleTagInput(event) {
        setTagInput(event.target.value);
        setPageNumber(1);
        setNumberOfPhotosToDisplay(numberOfPhotosToDisplayAndIncrement);
        setPhotos([]);
        setPhotosToDisplay([]);
        if (event.target.value === "all-tags") {
            setQuery("funny");
            navigate("/");
        } else {
            setQuery("funny " + event.target.value);
            navigate(`/?tag=${event.target.value}`);
        }
    }

    return (
        <div>
            <label htmlFor="tags">Select a Tag:</label>
            <select name="tags" id="tags" value={tagInput} onChange={handleTagInput}>
                <option value="all-tags">All Tags</option>
                {tags.map((tag) => {
                    return <option key={tag} value={utils.convertHeadingToSlug(tag)}>{tag}</option>
                })}
            </select>
        </div>
    )
}