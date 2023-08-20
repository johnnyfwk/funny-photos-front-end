export default function LoadMoreButton({ setNumberOfPhotosToDisplay, numberOfPhotosToIncrement, setPageNumber }) {
    function handleLoadMoreButton() {
        setNumberOfPhotosToDisplay((currentNumberOfPhotosToDisplay) => {
            return currentNumberOfPhotosToDisplay + numberOfPhotosToIncrement;
        })
        setPageNumber((currentPageNumber) => {
            return currentPageNumber + 1;
        })
    }

    return (
        <div id="load-more-button" onClick={handleLoadMoreButton}>Load More Photos</div>
    )
}