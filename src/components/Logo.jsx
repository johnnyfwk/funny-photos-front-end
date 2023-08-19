import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div className="max-width">
            <Link to="/" id="logo">FunnyPhotos.co.uk</Link>
        </div>
    )
}