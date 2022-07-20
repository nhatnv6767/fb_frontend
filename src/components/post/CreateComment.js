import {useEffect, useRef, useState} from "react";
import Picker from "emoji-picker-react";

export default function CreateComment({user}) {
    const [picker, setPicker] = useState(false);
    const [text, setText] = useState("");
    const [error, setError] = useState("");
    const [commentImage, setCommentImage] = useState("");
    const [cursorPosition, setCursorPosition] = useState();
    const textRef = useRef(null);
    const imgInput = useRef(null);


    useEffect(() => {
        /* Setting the cursor position to the end of the text. */
        textRef.current.selectionEnd = cursorPosition;
    }, [cursorPosition]);


    const handleEmoji = (e, {emoji}) => {
        const ref = textRef.current;
        /* Focusing on the textarea. */
        ref.focus();
        /* Getting the text before the cursor. */
        const start = text.substring(0, ref.selectionStart);
        // ! <DEBUG HERE>
        const end = text.substring(ref.selectionStart);
        const newText = start + emoji + end;
        setText(newText);
        /* Setting the cursor position to the end of the text. */
        setCursorPosition(start.length + emoji.length);
    };

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
            setCommentImage(event.target.result);
        };
    };
    return (
        <div className="create_comment_wrap">
            <div className="create_comment">
                <img src={user?.picture} alt=""/>
                <div className="comment_input_wrap">
                    {
                        picker && (
                            <div className="comment_emoji_picker">
                                <Picker onEmojiClick={handleEmoji}/>
                            </div>
                        )
                    }
                    <input
                        type="file"
                        hidden
                        ref={imgInput}
                        accept="image/jpeg, image/png, image/gif, image/webp"
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

                    <input
                        type="text"
                        ref={textRef}
                        value={text}
                        placeholder="Write a comment ..."
                        onChange={(e) => setText(e.target.value)}
                    />
                    <div
                        className="comment_circle_icon hover2"
                        onClick={() => {
                            setPicker((prev) => !prev);
                        }}>
                        <i className="emoji_icon"></i>
                    </div>
                    <div
                        className="comment_circle_icon hover2"
                        onClick={() => imgInput.current.click()}
                    >
                        <i className="camera_icon"></i>
                    </div>
                    <div
                        className="comment_circle_icon hover2"
                    >
                        <i className="gif_icon"></i>
                    </div>
                    <div
                        className="comment_circle_icon hover2"
                    >
                        <i className="sticker_icon"></i>
                    </div>
                </div>
            </div>
            {
                commentImage && (
                    <div className="comment_img_preview">
                        <img src={commentImage} alt=""/>
                    </div>
                )
            }
        </div>
    );
}