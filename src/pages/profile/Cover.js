import {useRef, useState, useCallback} from "react";
import useClickOutside from "../../helpers/clickOutside";
import Cropper from "react-easy-crop";
import getCroppedImg from "../../helpers/getCroppedImg";

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

    const [crop, setCrop] = useState({x: 0, y: 0});
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);
    const getCroppedImage = useCallback(async (show) => {
        try {
            const img = await getCroppedImg(coverPicture, croppedAreaPixels);
            if (show) {
                setZoom(1);
                setCrop({x: 0, y: 0});
                setCoverPicture(img);
            } else {
                return img;
            }
        } catch (e) {
            console.log(e);
        }
    }, [croppedAreaPixels]);

    // console.log(coverPicture);
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
            {
                coverPicture && (
                    <div className="cover_copper">
                        <Cropper
                            image={coverPicture}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                            showGrid={true}
                            objectFit="horizontal-cover"
                        />
                    </div>
                )
            }
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