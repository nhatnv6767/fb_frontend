import "./style.css";
import {useRef, useState} from "react";
import UpdateProfilePicture from "./UpdateProfilePicture";
import useClickOutside from "../../helpers/clickOutside";
import {photosReducer} from "../../functions/reducers";
import {useSelector} from "react-redux";

export default function ProfilePicture({setShow, pRef, photos}) {
    const popup = useRef(null);
    const {user} = useSelector((state) => ({...state}));
    const refInput = useRef(null);
    const [image, setImage] = useState("");
    const [error, setError] = useState("");
    useClickOutside(popup, () => setShow(false));
    const handleImage = (e) => {
        let file = e.target.files[0];
        if (
            file.type !== "image/jpeg"
            && file.type !== "image/png"
            && file.type !== "image/gif"
            && file.type !== "image/webp"
        ) {
            setError(`${file.name} format is not supported.`);
            return;
        } else if (file.size > 1024 * 1024 * 5) {
            setError(`${file.name} is too large max, 5mb allowed.`);
            return;
        }

        /* Reading the file as a data url. */
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            setImage(event.target.result);
        };
    };
    // console.log(image);
    return (
        <div className="blur">
            <input
                type="file"
                ref={refInput}
                accept="image/jpeg, image/png, image/gif, image/webp"
                hidden
                onChange={handleImage}
            />
            <div
                className="postBox pictureBox"
                ref={popup}
            >
                <div className="box_header">
                    <div
                        className="small_circle"
                        onClick={() => setShow(false)}
                    >
                        <i className="exit_icon"></i>
                    </div>
                    <span>Update profile picture</span>
                </div>
                <div className="update_picture_wrap">
                    <div className="update_picture_buttons">
                        <button
                            className="light_blue_btn"
                            onClick={() => refInput.current.click()}
                        >
                            <i className="plus_icon filter_blue"></i>
                            Upload photo
                        </button>
                        <button className="gray_btn">
                            <i className="frame_icon"></i>
                            Add frame
                        </button>
                    </div>
                </div>
                {
                    error && (
                        <div className="postError comment_error">
                            <div className="postError_error">{error}</div>
                            <button
                                className="blue_btn"
                                onClick={() => setError("")}
                            >
                                Try again
                            </button>
                        </div>
                    )
                }
                <div className="old_picture_wrap">
                    {
                        photos.filter((img) =>
                            img.folder === `${user.username}/profile_pictures`)
                            .map((photo) => (
                                <img
                                    src={photo.secure_url}
                                    key={photo.public_id}
                                    alt=""
                                    style={{width: "100px"}}
                                />
                            ))
                    }
                </div>
            </div>
            {
                image && (
                    <UpdateProfilePicture
                        setImage={setImage}
                        image={image}
                        setError={setError}
                        setShow={setShow}
                        pRef={pRef}
                    />
                )
            }
        </div>
    );
}