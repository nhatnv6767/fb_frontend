import "./style.css";
import {ErrorMessage, useField} from "formik";
import {useMediaQuery} from "react-responsive";

export default function RegisterInput({placeholder, bottom, ...props}) {
    const [field, meta] = useField(props);
    const view1 = useMediaQuery({
        /* It's a media query. It's a way to apply CSS styles based on the device's screen size. */
        query: "(min-width: 539px)",
    });
    const view2 = useMediaQuery({
        /* It's a media query. It's a way to apply CSS styles based on the device's screen size. */
        query: "(min-width: 850px)",
    });
    const view3 = useMediaQuery({
        /* It's a media query. It's a way to apply CSS styles based on the device's screen size. */
        query: "(min-width: 1170px)",
    });
    return (
        <div className="input_wrap register_input_wrap">

            <input
                /* It's a ternary operator. If `meta.touched` and `meta.error` are both true, then the className will be
                `input_error_border`. */
                className={meta.touched && meta.error ? "input_error_border" : ""}
                style={{
                    /* It's a ternary operator. If `view1` is true and `field.name` is equal to `first_name` or
                    `last_name`, then the
                    width will be `100%`. If `view1` is true and `field.name` is equal to `email` or `password`, then
                    the width will be
                    `370px`. Otherwise, the width will be `300px`. */
                    width: `${view1 &&
                    (field.name === "first_name" || field.name === "last_name") ?
                        "100%"
                        :
                        view1 && (field.name === "email" || field.name === "password") ?
                            "370px"
                            :
                            "300px"
                    }`
                }}
                type={field.type}
                name={field.name}
                placeholder={placeholder}
                {...field}
                {...props}
            />

            {meta.touched && meta.error ? (
                <div
                    className={view2 ? "input_error input_error_desktop" : "input_error"}
                    style={{transform: 'translateY(2px)'}}
                >
                    {
                        meta.touched && meta.error && <ErrorMessage name={field.name}/>
                    }
                    {
                        meta.touched && meta.error && (
                            <div
                                className={view2 ? "error_arrow_left" : "error_arrow_bottom"}
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