import "./style.css";
import {Link} from "react-router-dom";

export default function Reset() {
    return (
        <div className="reset">
            <div className="reset_header">
                <img src="../../../icons/facebook.svg" alt=""/>
                <Link to="/login" className="right_reset">
                    <button className="blue_btn">Login</button>
                </Link>
            </div>
        </div>
    );
}