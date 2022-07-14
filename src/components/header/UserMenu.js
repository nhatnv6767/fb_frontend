import {Link} from "react-router-dom";

export default function UserMenu({user}) {
    return (
        <div className="mmenu">
            <Link to="/profile" className="mmenu_header hover3">
                <img src={user?.picture} alt=""/>
            </Link>
        </div>
    );
}