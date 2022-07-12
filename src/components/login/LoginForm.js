import React from 'react';
import {Form, Formik} from "formik";
import LoginInput from "../inputs/loginInput";
import {Link} from "react-router-dom";
import {useState} from "react";
import * as Yup from "yup";

import DotLoader from "react-spinners/DotLoader";
import axios from "axios";
import {useDispatch} from "react-redux";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

const loginInfos = {
    email: "",
    password: '',
};
export default function LoginForm({setVisible}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login, setLogin] = useState(loginInfos);
    const {email, password} = login;
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

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const loginSubmit = async () => {
        try {
            setLoading(true);
            const {data} = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
                email,
                password,
            });

            /* Destructuring the data object.
            The message is being extracted from the data object and the rest of the data
            object is being stored in the rest variable. */
            /* Dispatching an action to the reducer. */
            dispatch({type: "LOGIN", payload: data});
            Cookies.set("user", JSON.stringify(data));
            navigate("/");
        } catch (e) {
            setLoading(false);
            setError(e.response.data.message);
        }
    };
    return (
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
                        onSubmit={() => {
                            loginSubmit();
                        }}
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
                    <DotLoader
                        color="#1876f2"
                        loading={loading}
                        size={30}
                    />
                    {
                        error &&
                        <div className="error_text">{error}</div>
                    }
                    <div className="sign_splitter"></div>
                    <button
                        className="blue_btn open_signup"
                        onClick={() => setVisible(true)}
                    >
                        Create Account
                    </button>
                </div>
                <Link to="/" className="sign_extra">
                    <b>Create a Page</b> for a celebrity, brand or business.
                </Link>
            </div>
        </div>
    );
}