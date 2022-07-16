import "./style.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Reset() {
    const {user} = useSelector((state) => ({...state}));
    return (
        <div className="reset">
            <div className="reset_header">
                <img src="../../../icons/facebook.svg" alt=""/>
                {
                    user ?
                        <div className="right_reset">
                            <Link to="/profile">
                                <img src={user?.picture} alt=""/>
                            </Link>
                            <button className="blue_btn">Logout</button>
                        </div>
                        : <Link to="/login" className="right_reset">
                            <button className="blue_btn">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
}