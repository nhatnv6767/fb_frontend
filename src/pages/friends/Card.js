import {Link} from "react-router-dom";

export default function Card({user}) {
    return (
        <div className="req_card">
            <Link to={`/profile/${user?.username}`}>
                <img src={user?.picture} alt=""/>
            </Link>
            <div className="req_name">
                {user?.first_name} {user?.last_name}
            </div>
        </div>
    );
}