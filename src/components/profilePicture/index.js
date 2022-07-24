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
                    <div className="small_circle">
                        <i className="exit_icon"></i>
                    </div>
                    <span>Update profile picture</span>
                </div>
                <div className="update_picture_wrap">
                    <div className="update_picture_buttons">
                        <button className="light_blue_btn">
                            <i className="plus_icon filter_blue"></i>
                            Upload photo
                        </button>
                        <button className="gray_btn">
                            <i className="frame_icon"></i>
                            Add frame
                        </button>
                    </div>
                </div>
                <div className="old_picture_wrap"></div>
            </div>
        </div>
    );
}