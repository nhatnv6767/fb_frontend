import {Link} from "react-router-dom";

export default function UserMenu({user}) {
    return (
        <div className="mmenu">
            <Link to="/profile" className="mmenu_header hover3">
                <img src={user?.picture} alt=""/>
                <div className="mmenu_col">
                    <span>
                        {user?.first_name}
                        {user?.last_name}
                    </span>
                    <span>
                        See your profile
                    </span>
                </div>
            </Link>
        </div>
    );
}