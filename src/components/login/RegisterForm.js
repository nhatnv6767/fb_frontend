import {Form, Formik} from "formik";

export default function RegisterForm() {
    return (
        <div className="blur">
            <div className="register">
                <div className="register_header">
                    <i className="exit_icon"></i>
                    <span>Sign Up</span>
                    <span>it's quick and easy</span>
                </div>
                <Formik>
                    {
                        (formik) => (
                            <Form className="register_form">
                                <div className="regi_line">
                                    
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    );
}