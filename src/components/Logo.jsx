import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div id="logo-container">
            <div id="logo" className="max-width">
                <Link to="/" className="max-width">FunnyPhotos.co.uk</Link>
            </div>
        </div>
       
    )
}