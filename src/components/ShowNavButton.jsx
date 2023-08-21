export default function ShowNavButton({ setIsNavVisible }) {
    function handleShowNavButton() {
        setIsNavVisible(true);
    }

    return (
        <div id="show-nav-button" onClick={handleShowNavButton}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}