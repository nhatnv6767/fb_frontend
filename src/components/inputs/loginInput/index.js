import "./style.css";

export default function LoginInput({type, name, placeholder}) {
    return (
        <div className="input_wrap">
            <input
                type={type}
                name={name}
                placeholder={placeholder}
            />
        </div>
    );
}