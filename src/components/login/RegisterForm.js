import {Form, Formik} from "formik";
import RegisterInput from "../inputs/registerInput";
import {useState} from "react";

const userInfos = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    bYear: "",
    bMonth: "",
    bDay: "",
    gender: "",
};

export default function RegisterForm() {
    /* Destructuring the user and setUser from the useState hook. */
    const {user, setUser} = useState(userInfos);
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
                                <div className="reg_line">
                                    <RegisterInput
                                        type="text"
                                        placeholder="First name"
                                        name="first_name"
                                        onChange={{handleRegisterChange}}
                                    />
                                    <RegisterInput
                                        type="text"
                                        placeholder="Surname"
                                        name="last_name"
                                        onChange={{handleRegisterChange}}
                                    />
                                </div>
                                <div className="reg_line">
                                    <RegisterInput
                                        type="text"
                                        placeholder="Mobile number or email address"
                                        name="email"
                                        onChange={{handleRegisterChange}}
                                    />
                                </div>
                                <div className="reg_line">
                                    <RegisterInput
                                        type="password"
                                        placeholder="New password"
                                        name="password"
                                        onChange={{handleRegisterChange}}
                                    />
                                </div>
                                <div className="reg_col">
                                    <div className="reg_line_header">
                                        Date of birth <i className="info_icon"></i>
                                    </div>
                                    <div className="reg_grid">
                                        <select name="bDay">
                                            <option>15</option>
                                        </select>
                                        <select name="bMonth">
                                            <option>15</option>
                                        </select>
                                        <select name="bYear">
                                            <option>15</option>
                                        </select>
                                    </div>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    );
}