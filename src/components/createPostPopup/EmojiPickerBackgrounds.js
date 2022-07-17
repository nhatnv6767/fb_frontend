import Picker from "emoji-picker-react";
import {useEffect, useRef, useState} from "react";

export default function EmojiPickerBackgrounds({text, textRef, setText}) {
    const [picker, setPicker] = useState(false);

    const [cursorPosition, setCursorPosition] = useState();
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
        <div className="post_emojis_wrap">
            {
                picker && (
                    <div className="comment_emoji_picker rlmove">
                        <Picker
                            onEmojiClick={handleEmoji}
                        />
                    </div>
                )
            }
            <img src="../../../icons/colorful.png" alt=""/>
            <i
                className="emoji_icon_large"
                onClick={() => {
                    setPicker(prev => !prev);
                }}
            ></i>
        </div>
    );
}