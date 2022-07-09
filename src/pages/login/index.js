import {Formik, Form} from "formik";

export default function Login() {
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
                            <Formik>
                                {
                                    (formik) => (
                                        <Form>
                                            <input type="text"/>
                                        </Form>
                                    )
                                }
                            </Formik>
                        </div>
                    </div>
                </div>
                <div className="register"></div>
            </div>
        </div>
    );
}