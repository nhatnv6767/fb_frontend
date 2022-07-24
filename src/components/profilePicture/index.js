import "./style.css";
import {useRef} from "react";

export default function ProfilePicture() {
    const refInput = useRef(null);
    const handleImage = () => {
    };
    return (
        <div className="blur">
            <input
                type="file"
                ref={refInput}
                hidden
                onChange={handleImage}
            />
            <div className="postBox pictureBox">
                <div className="box_header">
                    <div className="box_circle">
                        <i className="exit_icon"></i>
                    </div>
                    <span>Update profile picture</span>
                </div>
            </div>
        </div>
    );
}