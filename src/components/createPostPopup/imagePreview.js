import EmojiPickerBackgrounds from "./EmojiPickerBackgrounds";
import {useRef} from "react";

export default function ImagePreview({text, setText, user}) {
    const imageInputRef = useRef(null);
    const handleImages = () => {

    }
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
            </div>
        </div>
    );
}

/**
 * We using the same components but the func not the same by type2 after component here
 *
 */