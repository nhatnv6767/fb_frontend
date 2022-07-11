import "./style.css";
import {ErrorMessage, useField} from "formik";
import {useMediaQuery} from "react-responsive";

export default function RegisterInput({placeholder, bottom, ...props}) {
    const [field, meta] = useField(props);
    const destopView = useMediaQuery({
        /* It's a media query. It's a way to apply CSS styles based on the device's screen size. */
        query: "(min-width: 850px)",
    });
    return (
        <div className="input_wrap">

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

            {meta.touched && meta.error ? (
                <div
                    className={destopView ? "input_error input_error_desktop" : "input_error"}
                    style={{transform: 'translateY(2px)'}}
                >
                    {
                        meta.touched && meta.error && <ErrorMessage name={field.name}/>
                    }
                    {
                        meta.touched && meta.error && (
                            <div
                                className={destopView ? "error_arrow_left" : "error_arrow_bottom"}
                            ></div>
                        )
                    }
                </div>
            ) : ""
            }
            {meta.touched && meta.error && <i className="error_icon"></i>}
        </div>
    );
}