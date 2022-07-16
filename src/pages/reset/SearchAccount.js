import {Form, Formik} from "formik";
import LoginInput from "../../components/inputs/loginInput";
import {Link} from "react-router-dom";
import * as Yup from "yup";

export default function SearchAccount({email, setEmail, error, setLoading}) {
    const validateEmail = Yup.object({
        email: Yup.string()
            .required("Email address is required.")
            .email("Must be a valid email address.")
            .max(50, "Email address can't be more than 50 characters.")
    });

    const handleSearch = async () => {

    };
    return (
        <div className="reset_form">
            <div className="reset_form_header">
                Find Your Account
            </div>
            <div className="reset_form_text">
                Please enter your email address or mobile number to search for your account.
            </div>
            <Formik
                enableReinitialize
                initialValues={{
                    email,
                }}
                validationSchema={validateEmail}
                onSubmit={() => {
                    handleSearch();
                }}
            >
                {
                    (formik) => (
                        <Form>
                            <LoginInput
                                type="text"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email address or mobile number"
                            />
                            {
                                error && <div className="error_text">{error}</div>
                            }
                            <div className="reset_form_btns">
                                <Link to="/login" className="gray_btn">
                                    Cancel
                                </Link>
                                <button type="submit" className="blue_btn">
                                    Search
                                </button>
                            </div>
                        </Form>
                    )

                }
            </Formik>
        </div>
    );
}