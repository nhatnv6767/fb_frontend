import "./style.css";
import {ErrorMessage, useField} from "formik";

export default function LoginInput({placeholder, bottom, ...props}) {
    const [field, meta] = useField(props);
    return (
        <div className="input_wrap">
            {meta.touched && meta.error && !bottom ? (
                <div className="input_error">
                    {
                        /* meta.touched: A boolean that is true if the field has been touched. */
                        meta.touched && meta.error && <ErrorMessage name={field.name}/>
                    }

                    {
                        meta.touched && meta.error && <div className="error_arrow_top"></div>
                    }
                </div>
            ) : ""
            }
            <input
                /* It's a ternary operator. If `meta.touched` and `meta.error` are both true, then the className will be
                `input_error_border`. */
                className={meta.touched && meta.error ? "input_error_border" : ""}
                type={field.type}
                name={field.name}
                placeholder={placeholder}
                {...field}
                {...props}
            />

            {meta.touched && meta.error && bottom ? (
                <div className="input_error">
                    {
                        meta.touched && meta.error && <ErrorMessage name={field.name}/>
                    }
                    {
                        meta.touched && meta.error && <div className="error_arrow_bottom"></div>
                    }
                </div>
            ) : ""
            }
            {/* It's a ternary operator. If `bottom` is true, then the `top` will be `60%`. */}
            {meta.touched && meta.error && <i className="error_icon" style={{top: `${!bottom && "63%"}`}}></i>}
        </div>
    );
}