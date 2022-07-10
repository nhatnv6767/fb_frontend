import {Form, Formik} from "formik";
import RegisterInput from "../inputs/registerInput";
import {useState} from "react";


export default function RegisterForm() {
    const userInfos = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        bYear: new Date().getFullYear(),
        bMonth: new Date().getMonth() + 1,
        bDay: new Date().getDate(),
        gender: "",
    };


    /* Destructuring the user and setUser from the useState hook. */
    const [user, setUser] = useState(userInfos);
    const {
        first_name,
        last_name,
        email,
        password,
        bYear,
        bMonth,
        bDay,
        gender,
    } = user;
    const handleRegisterChange = (e) => {
        console.log(e);
        const {name, value} = e.target;
        /* A spread operator. It is taking the current state of the user and adding the new value to it. */
        setUser({...user, [name]: value});
    };

    console.log(user);

    /* Creating an array of 100 years. */
    const years = Array.from(new Array(100), (val, index) => bYear - index);
    /* Creating an array of 12 months. */
    const months = Array.from(new Array(12), (val, index) => 1 + index);

    const getDays = () => {
        /* Getting the number of days in a month. */
        return new Date(bYear, bMonth, 0).getDate();
    };
    const days = Array.from(new Array(getDays()), (val, index) => 1 + index);
    console.log(days);

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
                                        onChange={handleRegisterChange}
                                    />
                                    <RegisterInput
                                        type="text"
                                        placeholder="Surname"
                                        name="last_name"
                                        onChange={handleRegisterChange}
                                    />
                                </div>
                                <div className="reg_line">
                                    <RegisterInput
                                        type="text"
                                        placeholder="Mobile number or email address"
                                        name="email"
                                        onChange={handleRegisterChange}
                                    />
                                </div>
                                <div className="reg_line">
                                    <RegisterInput
                                        type="password"
                                        placeholder="New password"
                                        name="password"
                                        onChange={handleRegisterChange}
                                    />
                                </div>
                                <div className="reg_col">
                                    <div className="reg_line_header">
                                        Date of birth <i className="info_icon"></i>
                                    </div>
                                    <div className="reg_grid">
                                        <select name="bDay" value={bDay} onChange={handleRegisterChange}>
                                            {days.map((day, i) => (
                                                <option value={day} key={i}>{day}</option>
                                            ))}
                                        </select>
                                        <select name="bMonth" value={bMonth} onChange={handleRegisterChange}>
                                            {months.map((month, i) => (
                                                <option value={month} key={i}>{month}</option>
                                            ))}
                                        </select>
                                        <select name="bYear" value={bYear} onChange={handleRegisterChange}>
                                            {years.map((year, i) => (
                                                <option value={year} key={i}>{year}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="reg_col">
                                    <div className="reg_line_header">
                                        Gender <i className="info_icon"></i>
                                    </div>
                                    <div className="reg_grid">
                                        <label htmlFor="male">
                                            Male
                                            <input
                                                type="radio"
                                                name="gender"
                                                id="male"
                                                value="male"
                                                onChange={handleRegisterChange}
                                            />
                                        </label>
                                        <label htmlFor="female">
                                            Female
                                            <input
                                                type="radio"
                                                name="gender"
                                                id="female"
                                                value="female"
                                                onChange={handleRegisterChange}
                                            />
                                        </label>
                                        <label htmlFor="custom">
                                            Custom
                                            <input
                                                type="radio"
                                                name="gender"
                                                id="custom"
                                                value="custom"
                                                onChange={handleRegisterChange}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="reg_infos">
                                    By clicking Sign Up, you agree to our <span>Terms, Data Policy&nbsp;</span>and {" "}
                                    <span>Cookies Policy.</span> You may
                                    receive SMS Notifications from us and can opt out any time.
                                </div>
                                <div className="reg_btn_wrapper">
                                    <button className="blue_btn open_signup">Sign Up</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    );
}