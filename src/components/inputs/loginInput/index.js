import "./style.css";
import {ErrorMessage, useField} from "formik";

export default function LoginInput({placeholder, ...props}) {
    const [field, meta] = useField(props);
    return (
        <div className="input_wrap">
            <div>
                {
                    /* meta.touched: A boolean that is true if the field has been touched. */
                    meta.touched && meta.error && <ErrorMessage name={field.name}/>
                }
            </div>
            <input
                /* It's a ternary operator. If `meta.touched` and `meta.error` are both true, then the className will be
                `input_error_border`. */
                className={meta.touched && meta.error && "input_error_border"}
                type={field.type}
                name={field.name}
                placeholder={placeholder}
                {...field}
                {...props}
            />
        </div>
    );
}