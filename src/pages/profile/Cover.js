import {useRef, useState} from "react";
import useClickOutside from "../../helpers/clickOutside";

export default function Cover({cover, visitor}) {
    const [showCoverMenu, setShowCoverMenu] = useState(false);
    const [coverPicture, setCoverPicture] = useState("");
    const menuRef = useRef(null);
    const refInput = useRef(null);
    useClickOutside(menuRef, () => setShowCoverMenu(false));
    const [error, setError] = useState("");
    // useClickOutside(popup, () => setShow(false));
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
            setCoverPicture(event.target.result);
        };
    };

    console.log(coverPicture);
    return (
        <div className="profile_cover">
            <input
                type="file"
                ref={refInput}
                hidden
                accept="image/jpeg, image/png, image/webp, image/gif"
                onChange={handleImage}
            />
            {
                cover &&
                <img src={cover} className="cover" alt=""/>
            }
            {
                !visitor && (
                    <div className="update_cover_wrapper">
                        <div
                            className="open_cover_update"
                            onClick={() => setShowCoverMenu((prev) => !prev)}
                        >
                            <i className="camera_filled_icon"></i>
                            Add Cover Photo
                        </div>
                        {
                            showCoverMenu && (
                                <div className="open_cover_menu" ref={menuRef}>
                                    <div className="open_cover_menu_item hover1">
                                        <i className="photo_icon"></i>
                                        Select Photo
                                    </div>
                                    <div
                                        className="open_cover_menu_item hover1"
                                        onClick={() => refInput.current.click()}
                                    >
                                        <i className="upload_icon"></i>
                                        Upload Photo
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}