import EmojiPickerBackgrounds from "./EmojiPickerBackgrounds";
import {useRef} from "react";

export default function ImagePreview(
    {
        text,
        setText,
        user,
        images,
        setImages,
    }
) {
    const imageInputRef = useRef(null);
    const handleImages = () => {

    };
    return (
        <div className="overflow_a">
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
                    multiple
                    hidden
                    ref={imageInputRef}
                    onChange={handleImages}
                />

                {
                    images && images.length ? "" :
                        <div className="add_pics_inside1">
                            <div className="small_white_circle">
                                <i className="exit_icon"></i>
                            </div>
                            <div className="add_col">
                                <div className="add_circle">
                                    <i className="addPhoto_icon"></i>
                                </div>
                                <span>Add Photos/Videos</span>
                                <span>or drag and drop</span>
                            </div>
                        </div>
                }

            </div>
        </div>
    );
}

/**
 * We using the same components but the func not the same by type2 after component here
 *
 */