export default function SendEmail({user}) {
    return (
        <div className="reset_form dynamic_height">
            <div className="reset_form_header">
                Reset Your Password
            </div>
            <div className="reset_grid">
                <div className="reset_left">
                    <div className="reset_form_text">
                        How do you want to receive the code to reset your password?
                    </div>
                    <label htmlFor="email">
                        <input type="radio" name="" id="email" checked readOnly/>
                        <div className="label_col">
                            <span>Send code via email</span>
                            <span>email@gmail.com</span>
                        </div>
                    </label>
                </div>

                <div className="reset_right"></div>
            </div>
        </div>
    );
}