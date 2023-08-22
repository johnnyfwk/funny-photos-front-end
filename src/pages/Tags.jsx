import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import tags from "../content/tags";

export default function Tags({
    numberOfPhotosToDisplayAndIncrement,
    setQuery,
    setPageNumber,
    setPhotos,
    setNumberOfPhotosToDisplay,
    setPhotosToDisplay,
    setCategoryInput,
    setSearchInput,
    setTagInput
}) {
    const tagsUniques = [... new Set(tags)];

    function handleTag(event) {
        setTagInput(event.target.innerText);
        setQuery("funny " + event.target.innerText);
        setPageNumber(1);
        setPhotos([]);
        setNumberOfPhotosToDisplay(numberOfPhotosToDisplayAndIncrement);
        setPhotosToDisplay([]);
        setCategoryInput("all-categories");
        setSearchInput("");
        window.scrollTo(0, 0);
    }

    return (
        <div>
            <Helmet>
                <link rel="canonical" href="https://funnyphotos.co.uk/tags" />
                <title>Funny Photo Tags • FunnyPhotos.co.uk</title>
                <meta name="description" content="Search funny photo by tags." />
            </Helmet>

            <div id="header-container">
                <header className="max-width">
                    <h1>Tags</h1>
                    <p>Search for funny photos by tags.</p>
                </header>
            </div>
            
            <div id="main-container">
                <main className="max-width">
                    <div id="tags-container">
                        {tagsUniques.map((tag) => {
                            return <Link key={tag} to={`/?tag=${tag.replaceAll(" ", "-")}`} onClick={handleTag}>{tag}</Link>
                        })}
                    </div>
                </main>
            </div>
        </div>
    )
}