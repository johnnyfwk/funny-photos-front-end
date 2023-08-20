export default function LoadMoreButton({ setNumberOfPhotosToDisplay, numberOfPhotosToDisplayAndIncrement, setPageNumber }) {
    function handleLoadMoreButton() {
        setNumberOfPhotosToDisplay((currentNumberOfPhotosToDisplay) => {
            return currentNumberOfPhotosToDisplay + numberOfPhotosToDisplayAndIncrement;
        })
        setPageNumber((currentPageNumber) => {
            return currentPageNumber + 1;
        })
    }

    return (
        <div id="load-more-button" onClick={handleLoadMoreButton}>Load More Photos</div>
    )
}