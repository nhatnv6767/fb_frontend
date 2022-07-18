import EmojiPickerBackgrounds from "./EmojiPickerBackgrounds";
import {useRef} from "react";

export default function ImagePreview(
    {
        text,
        setText,
        user,
        images,
        setImages,
        setShowPrev,
        setError,
    }
) {
    const imageInputRef = useRef(null);

    const handleImages = (e) => {
        let files = Array.from(e.target.files);
        files.forEach((img) => {
            if (img.type !== "image/jpeg"
                || img.type !== "image/png"
                || img.type !== "image/webp"
                || img.type !== "image/gif"
            ) {
                setError(`${img.name} format is unsupported ! only Jpeg, Png, Webp, Gif are allowed.`);
                return;
            } else if (img.size > 1024 * 1024 * 5) {
                setError(`${img.name} size is too large, max 5mb allowed.`);
                return;
            }
            /* It's a JavaScript API that allows you to read the contents of a file. */
            const reader = new FileReader();
            reader.readAsDataURL(img);
            // going to take everything we read from these files and add them to the img-array
            reader.onload = (readerEvent) => {
                /* It's a way to take an array and spread it out into its individual
                values. */
                setImages((images) => [...images, readerEvent.target.result]);
            };
        });
    };
    return (
        <div className="overflow_a scrollbar">
            <EmojiPickerBackgrounds
                text={text}
                setText={setText}
                user={user}
                type2
            />
            <div className="add_pics_wrap">
                {/* It's a React feature that allows you to get a reference to a DOM element. */}
                <input
                    type="file"
                    accept="image/jpeg, image/png, image/webp, image/gif"
                    multiple
                    hidden
                    ref={imageInputRef}
                    onChange={handleImages}
                />

                {
                    images && images.length ? (
                            <div className="add_pics_inside1 p0">
                                <div className="preview_actions">
                                    <button className="hover1">
                                        <i className="edit_icon"></i>
                                        Edit
                                    </button>
                                    <button
                                        className="hover1"
                                        onClick={() => {
                                            imageInputRef.current.click();
                                        }}
                                    >
                                        <i className="addPhoto_icon"></i>
                                        Add Photos/Videos
                                    </button>
                                </div>
                                <div
                                    className="small_white_circle"
                                    onClick={() => {
                                        setImages([]);
                                    }}
                                >
                                    <i className="exit_icon"></i>
                                </div>
                                <div
                                    className={images.length === 1
                                        ? "preview1"
                                        : images.length === 2
                                            ? "preview2"
                                            : images.length === 3
                                                ? "preview3"
                                                : images.length === 4
                                                    ? "preview4"
                                                    : images.length === 5
                                                        ? "preview5"
                                                        : images.length % 2 === 0
                                                            ? "preview6"
                                                            : "preview6 singular_grid"
                                    }
                                >
                                    {
                                        images.map((img, i) => (
                                            <img src={img} key={i} alt=""/>
                                        ))
                                    }
                                </div>
                            </div>
                        ) :
                        (
                            <div className="add_pics_inside1">
                                <div
                                    className="small_white_circle"
                                    onClick={() => {
                                        setShowPrev(false);
                                    }}
                                >
                                    <i className="exit_icon"></i>
                                </div>
                                <div
                                    className="add_col"
                                    onClick={() => {
                                        imageInputRef.current.click();
                                    }}
                                >
                                    <div className="add_circle">
                                        <i className="addPhoto_icon"></i>
                                    </div>
                                    <span>Add Photos/Videos</span>
                                    <span>or drag and drop</span>
                                </div>
                            </div>
                        )
                }
                <div className="add_pics_inside2">
                    <div className="add_circle">
                        <i className="phone_icon"></i>
                    </div>
                    <div className="mobile_text">Add photos from your mobile device.</div>
                    <span className="addphone_btn">Add</span>
                </div>
            </div>
        </div>
    );
}

/**
 * We using the same components but the func not the same by type2 after component here
 *
 */


