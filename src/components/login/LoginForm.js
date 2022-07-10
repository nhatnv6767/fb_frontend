import React from 'react';
import {Form, Formik} from "formik";
import LoginInput from "../inputs/loginInput";
import {Link} from "react-router-dom";
import {useState} from "react";
import * as Yup from "yup";

const loginInfos = {
    email: "",
    password: '',
};
export default function LoginForm() {
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
    );
}