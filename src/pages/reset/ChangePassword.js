import {Form, Formik} from "formik";
import LoginInput from "../../components/inputs/loginInput";
import {Link} from "react-router-dom";
import * as Yup from "yup";

export default function ChangePassword({
                                           user,
                                           password,
                                           setPassword,
                                           conf_password,
                                           setConf_password,
                                           error,
                                       }) {
    const validatePassword = Yup.object({
        password: Yup.string()
            .required("Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &).")
            .min(6, "Password must be at least 6 characters.")
            .max(36, "Password can't be more than 36 characters."),
        conf_password: Yup.string().required("Confirm your password.")
            .oneOf([Yup.ref("password")], "Passwords must match.")

    });
    return (
        <div className="reset_form" style={{height: "310px"}}>
            <div className="reset_form_header">
                Change Password
            </div>
            <div className="reset_form_text">
                Pick a strong password.
            </div>
            <Formik
                enableReinitialize
                initialValues={{
                    password,
                    conf_password,
                }}
                validationSchema={validatePassword}
            >
                {
                    (formik) => (
                        <Form>
                            <LoginInput
                                type="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="New password"
                            />
                            <LoginInput
                                type="password"
                                name="conf_password"
                                onChange={(e) => setConf_password(e.target.value)}
                                placeholder="Confirm new password"
                                // allow to know that this element should be after the input itself
                                bottom
                            />
                            {
                                error && <div className="error_text">{error}</div>
                            }
                            <div className="reset_form_btns">
                                <Link to="/login" className="gray_btn">
                                    Cancel
                                </Link>
                                <button type="submit" className="blue_btn">
                                    Continue
                                </button>
                            </div>
                        </Form>
                    )

                }
            </Formik>
        </div>
    );
}