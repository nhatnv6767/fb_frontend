import "./style.css";
import {ErrorMessage, useField} from "formik";
import {useMediaQuery} from "react-responsive";

export default function LoginInput({placeholder, bottom, ...props}) {
    const [field, meta] = useField(props);
    const destopView = useMediaQuery({
        /* It's a media query. It's a way to apply CSS styles based on the device's screen size. */
        query: "(min-width: 850px)",
    });
    console.log(destopView);
    return (
        <div className="input_wrap">
            {meta.touched && meta.error && !bottom ? (
                <div
                    className={destopView ? "input_error input_error_desktop" : "input_error"}
                    style={{transform: 'translateY(3px)'}}
                >
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
                <div
                    className={destopView ? "input_error input_error_desktop" : "input_error"}
                    style={{transform: 'translateY(2px)'}}
                >
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