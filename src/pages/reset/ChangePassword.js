import {Form, Formik} from "formik";
import LoginInput from "../../components/inputs/loginInput";
import {Link} from "react-router-dom";

export default function ChangePassword({
                                           user,
                                           password,
                                           setPassword,
                                           conf_password,
                                           setConf_password,
                                           error,
                                       }) {
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