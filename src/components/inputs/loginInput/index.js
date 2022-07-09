import "./style.css";
import {useField} from "formik";

export default function LoginInput({placeholder, ...props}) {
    const [field, meta] = useField(props);
    return (
        <div className="input_wrap">
            <input
                placeholder={placeholder}
                {...field}
                {...props}
            />
        </div>
    );
}