import {Form, Formik} from "formik";
import LoginInput from "../../components/inputs/loginInput";
import {Link} from "react-router-dom";
import * as Yup from "yup";

export default function CodeVerification({code, setCode, error, setLoading, setError, setVisible}) {

    const validateCode = Yup.object({
        code: Yup.string()
            .required("Code is required.")
            .min(5, "Code must be at least 5 characters.")
            .max(5, "Code can't be more than 5 characters.")
    });

    const verifyCode = () => {
        try {

        } catch (e) {
            setLoading(false);
            setError(e.response.data.message);
        }
    };
    return (
        <div className="reset_form">
            <div className="reset_form_header">
                Code verification
            </div>
            <div className="reset_form_text">
                Please enter code that been sent to your email.
            </div>
            <Formik
                enableReinitialize
                initialValues={{
                    code,
                }}
                validationSchema={validateCode}
                onSubmit={() => {
                    verifyCode();
                }}
            >
                {
                    (formik) => (
                        <Form>
                            <LoginInput
                                type="text"
                                name="code"
                                onChange={(e) => setCode(e.target.value)}
                                placeholder="Code"
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