import "./style.css";

export default function LoginInput({placeholder}) {
    return (
        <div className="input_wrap">
            <input placeholder={placeholder}/>
        </div>
    );
}