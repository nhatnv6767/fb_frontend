import "./style.css";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Cookies from "js-cookie";
import {Formik} from "formik";

export default function Reset() {
    const {user} = useSelector((state) => ({...state}));
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
                <div className="reset_form">
                    <div className="reset_form_header">
                        Find Your Account
                    </div>
                    <div className="reset_form_text">
                        Please enter your email address or mobile number to search for your account.
                    </div>
                    <Formik
                        initialValues={{}}
                    >

                    </Formik>
                </div>
            </div>
        </div>
    );
}