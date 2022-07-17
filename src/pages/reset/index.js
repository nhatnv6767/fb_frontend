import "./style.css";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Cookies from "js-cookie";
import {useState} from "react";
import SearchAccount from "./SearchAccount";
import SendEmail from "./SendEmail";
import CodeVerification from "./CodeVerification";
import Footer from "../../components/login/Footer";
import ChangePassword from "./ChangePassword";

export default function Reset() {
    const {user} = useSelector((state) => ({...state}));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [conf_password, setConf_password] = useState("");
    const [error, setError] = useState("");
    const [visible, setVisible] = useState(0);
    const [userInfos, setUserInfos] = useState("");
    const logout = () => {
        Cookies.set('user', "");
        dispatch({
            type: "LOGOUT",
        });
        navigate("/login");
    };
    console.log(userInfos);
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
                            setLoading={setLoading}
                            setError={setError}
                            setUserInfos={setUserInfos}
                            setVisible={setVisible}
                        />
                    )
                }

                {
                    visible === 1 && userInfos && (
                        <SendEmail
                            email={email}
                            userInfos={userInfos}
                            error={error}
                            loading={loading}
                            setLoading={setLoading}
                            setError={setError}
                            setUserInfos={setUserInfos}
                            setVisible={setVisible}
                        />
                    )
                }

                {
                    visible === 2 && (
                        <CodeVerification
                            userInfos={userInfos}
                            user={user}
                            code={code}
                            setCode={setCode}
                            error={error}
                            loading={loading}
                            setLoading={setLoading}
                            setError={setError}
                            setVisible={setVisible}
                        />
                    )
                }

                {
                    visible === 3 && (
                        <ChangePassword
                            userInfos={userInfos}
                            password={password}
                            setPassword={setPassword}
                            conf_password={conf_password}
                            setConf_password={setConf_password}
                            error={error}
                            loading={loading}
                            setLoading={setLoading}
                            setError={setError}
                            setVisible={setVisible}
                        />
                    )
                }
            </div>
            <Footer/>
        </div>
    );
}