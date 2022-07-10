import {Form, Formik} from "formik";
import RegisterInput from "../inputs/registerInput";
import {useState} from "react";

export default function RegisterForm() {

    /* Destructuring the user and setUser from the useState hook. */
    const {user, setUser} = useState();
    const handleRegisterChange = (e) => {
        const {name, value} = e.target;
        /* A spread operator. It is taking the current state of the user and adding the new value to it. */
        setUser({...user, [name]: value});
    };

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