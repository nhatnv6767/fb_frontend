import "./style.css";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Cookies from "js-cookie";
import {useState} from "react";
import SearchAccount from "./SearchAccount";
import SendEmail from "./SendEmail";
import CodeVerification from "./CodeVerification";

export default function Reset() {
    const {user} = useSelector((state) => ({...state}));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {email, setEmail} = useState("");
    const {error, setError} = useState("");
    const [visible, setVisible] = useState(2);
    const logout = () => {
        Cookies.set('user', "");
        dispatch({
            type: "LOGOUT",
        });
        navigate("/login");
    };
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
                            <button
                                className="blue_btn"
                                onClick={() => {
                                    logout();
                                }}
                            >Logout
                            </button>
                        </div>
                        : <Link to="/login" className="right_reset">
                            <button className="blue_btn">Login</button>
                        </Link>
                }
            </div>
            <div className="reset_wrap">
                {
                    visible === 0 && (
                        <SearchAccount
                            email={email}
                            setEmail={setEmail}
                            error={error}
                        />
                    )
                }

                {
                    visible === 1 && (
                        <SendEmail
                            user={user}
                        />
                    )
                }

                {
                    visible === 2 && (
                        <CodeVerification
                            user={user}
                        />
                    )
                }
            </div>
        </div>
    );
}