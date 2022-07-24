import {useCallback, useRef, useState} from "react";
import Cropper from "react-easy-crop";

export default function UpdateProfilePicture({image, setImage}) {
    const [description, setDescription] = useState("");
    const [crop, setCrop] = useState({x: 0, y: 0});
    const [zoom, setZoom] = useState(1);
    const slider = useRef(null)

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels);
    }, []);

    const zoomIn = () => {

    };

    const zoomOut = () => {

    };
    console.log(zoom);
    return (
        <div className="postBox update_img">
            <div className="box_header">
                <div className="small_circle" onClick={() => setImage("")}>
                    <i className="exit_icon"></i>
                </div>
                <span>Update profile picture</span>
            </div>
            <div className="update_image_desc">
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="textarea_blue details_input"
                >
                </textarea>
            </div>
            <div className="update_center">
                <div className="cropper">
                    <Cropper
                        image={image}
                        crop={crop}
                        zoom={zoom}
                        aspect={1}
                        cropShape="round"
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                        showGrid={false}
                    />
                </div>
                <div className="slider">
                    <div
                        className="slider_circle"
                        onClick={() => zoomOut()}
                    >
                        <i className="minus_icon"></i>
                    </div>
                    <input
                        type="range"
                        min={1}
                        max={3}
                        step={0.2}
                        value={zoom}
                        onChange={(e) => setZoom(e.target.value)}
                    />
                    <div
                        className="slider_circle"
                        onClick={() => zoomIn()}
                    >
                        <i className="plus_icon"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}