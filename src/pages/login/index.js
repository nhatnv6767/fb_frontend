import "./style.css";
import {Formik, Form} from "formik";
import {Link} from "react-router-dom";
import LoginInput from "../../components/inputs/loginInput";
import {useState} from "react";
import * as Yup from "yup";

const loginInfos = {
    email: "",
    password: '',
};

export default function Login() {
    const [login, setLogin] = useState(loginInfos);
    const {email, password} = login;
    console.log(login);
    const handleLoginChange = (e) => {
        const {name, value} = e.target;
        setLogin({...login, [name]: value});
    };

    const loginValidation = Yup.object({
        email: Yup.string()
            .required("Email address is required.")
            .email("Must be a valid email.")
            .max(100, "Email must be at most 100 characters"),
        password: Yup.string().required("Password is required."),
    });
    return (
        <div className="login">
            <div className="login_wrapper">
                <div className="login_wrap">
                    <div className="login_1">
                        <img src="../../icons/facebook.svg" alt=""/>
                        <span>
                            Facebook helps you connect and share with the people in your life.
                        </span>
                    </div>
                    <div className="login_2">
                        <div className="login_2_wrap">
                            <Formik
                                /* A prop that is used to tell the formik form to re-render when the initial values change. */
                                enableReinitialize
                                /* Setting the initial values of the formik form. */
                                initialValues={{
                                    email,
                                    password,
                                }}
                                validationSchema={loginValidation}
                            >
                                {
                                    (formik) => (
                                        <Form>
                                            <LoginInput
                                                type="text"
                                                name="email"
                                                placeholder="Email address or Phone number"
                                                onChange={handleLoginChange}
                                            />
                                            <LoginInput
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                onChange={handleLoginChange}
                                                bottom
                                            />
                                            <button type="submit" className="blue_btn">Log In</button>
                                        </Form>
                                    )
                                }
                            </Formik>
                            <Link to="/forgot" className="forgot_password">
                                Forgoten password?
                            </Link>
                            <div className="sign_splitter"></div>
                            <button className="blue_btn open_signup">Create Account</button>
                        </div>
                        <Link to="/" className="sign_extra">
                            <b>Create a Page</b> for a celebrity, brand or business.
                        </Link>
                    </div>
                </div>
                <div className="register"></div>
                <footer className="login_footer">
                    <div className="login_footer_wrap">
                        <Link to="/">English (US)</Link>
                        <Link to="/">日本語</Link>
                        <Link to="/">Português (Brasil)</Link>
                        <Link to="/">中文(简体)</Link>
                        <Link to="/">Tiếng Việt</Link>
                        <Link to="/">Español</Link>
                        <Link to="/">Bahasa Indonesia</Link>
                        <Link to="/">한국어</Link>
                        <Link to="/">Français (France)</Link>
                        <Link to="/">Deutsch</Link>
                        <Link to="/">Italiano</Link>
                        <Link to="/" className="footer_square">
                            <i className="plus_icon"> </i>
                        </Link>
                    </div>
                    <div className="footer_splitter"></div>
                    <div className="login_footer wrap">
                        <Link to="/">Sign Up</Link>
                        <Link to="/">Log In</Link>
                        <Link to="/">Messenger</Link>
                        <Link to="/">Facebook Lite</Link>
                        <Link to="/">Watch</Link>
                        <Link to="/">Places</Link>
                        <Link to="/">Games</Link>
                        <Link to="/">Marketplace</Link>
                        <Link to="/">Facebook Pay</Link>
                        <Link to="/">Oculus</Link>
                        <Link to="/">Portal</Link>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Bulletin</Link>
                        <Link to="/">Local</Link>
                        <Link to="/">Fundraisers</Link>
                        <Link to="/">Services</Link>
                        <Link to="/">Voting Information Center</Link>
                        <Link to="/">Groups</Link>
                        <Link to="/">About</Link>
                        <Link to="/">Create Ad</Link>
                        <Link to="/">Create Page</Link>
                        <Link to="/">Developers</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Privacy</Link>
                        <Link to="/">Cookies</Link>
                    </div>
                </footer>
            </div>
        </div>
    );
}