import {Form, Formik} from "formik";
import LoginInput from "../../components/inputs/loginInput";
import {Link} from "react-router-dom";

export default function SendEmail() {
    return (
        <div className="reset_form dynamic_height">
            <div className="reset_form_header">
                Reset Your Password
            </div>
            <div className="reset_grid">
                <div className="reset_left"></div>
                <div className="reset_right"></div>
            </div>
        </div>
    );
}