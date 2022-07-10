import {Form, Formik} from "formik";
import RegisterInput from "../inputs/registerInput";

export default function RegisterForm() {

    const handleRegisterChange = () => {
        
    }

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
                                    <RegisterInput
                                        type="text"
                                        placeholder="First name"
                                        name="first_name"
                                        onChange={{handleRegisterChange}}
                                    />
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    );
}