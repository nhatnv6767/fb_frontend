import Picker from "emoji-picker-react";
import {useEffect, useRef, useState} from "react";

export default function EmojiPickerBackgrounds({text, setText, user, type2}) {
    const [picker, setPicker] = useState(false);
    const [cursorPosition, setCursorPosition] = useState();
    const textRef = useRef(null);
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
    return (
        <div className={type2 ? "images_input" : ""}>
            <div className={!type2 ? "flex_center" : ""}>
                            <textarea
                                ref={textRef}
                                maxLength="100"
                                value={text}
                                placeholder={`What's on your mind, ${user?.first_name}`}
                                className={`post_input ${type2 ? "input2" : ""}`}
                                onChange={(e) => setText(e.target.value)}
                            >

                            </textarea>
            </div>
            <div className={!type2 ? "post_emojis_wrap" : ""}>
                {
                    picker && (
                        <div className={`comment_emoji_picker ${type2 ? "movepicker2" : "rlmove"}`}>
                            <Picker
                                onEmojiClick={handleEmoji}
                            />
                        </div>
                    )
                }
                {
                    !type2 && (<img src="../../../icons/colorful.png" alt=""/>)
                }
                <i
                    className={`emoji_icon_large ${type2 ? "moveleft" : ""}`}
                    onClick={() => {
                        setPicker(prev => !prev);
                    }}
                ></i>
            </div>

        </div>
    );
}