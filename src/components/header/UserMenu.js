import {Link} from "react-router-dom";

export default function UserMenu() {
    return (
        <div className="mmenu">
            <Link to="/profile" className="mmenu_header hover3"></Link>
        </div>
    );
}