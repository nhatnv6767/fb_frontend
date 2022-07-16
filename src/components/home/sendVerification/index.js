import "./style.css";
import {useState} from "react";
import axios from "axios";

export default function SendVerification({user}) {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const sendVerificationLink = async () => {
        try {
            /* we're not going to send anything right here,
            because we're only just going to see the token that's going to be the header
            */
            const {data} = await axios
                .post(`${process.env.REACT_APP_BACKEND_URL}/sendVerification`
                    , {}
                    , {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    });
            setSuccess(data.message);
        } catch (e) {
            setError(e.response.data.message);
        }
    };
    return (
        <div className="send_verification">
            <span>
                Your account is not verified, verify your account before it gets deleted
                after a month from creating.
            </span>
            <a
                onClick={() => {
                    sendVerificationLink();
                }}
            >
                click here to resend verification link
            </a>

            {
                success && <div className="success_text">{success}</div>
            }

            {
                error && <div className="error_text">{error}</div>
            }
        </div>
    );
}