import Picker from "emoji-picker-react";
import {useEffect, useRef, useState} from "react";

export default function EmojiPickerBackgrounds({text, setText, user, type2}) {
    const [picker, setPicker] = useState(false);
    const [showBgs, setShowBgs] = useState(false);
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

    const postBackgrounds = [
        "../../../images/postbackgrounds/1.jpg",
        "../../../images/postbackgrounds/2.jpg",
        "../../../images/postbackgrounds/3.jpg",
        "../../../images/postbackgrounds/4.jpg",
        "../../../images/postbackgrounds/5.jpg",
        "../../../images/postbackgrounds/6.jpg",
        "../../../images/postbackgrounds/7.jpg",
        "../../../images/postbackgrounds/8.jpg",
        "../../../images/postbackgrounds/9.jpg",
    ];

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
                    !type2 && (
                        <img
                            src="../../../icons/colorful.png"
                            alt=""
                            onClick={() => {
                                setShowBgs(prev => !prev);
                            }}
                        />
                    )
                }

                {
                    !type2 && showBgs && (
                        <div className="post_backgrounds">
                            <div className="no_bg"></div>
                            {
                                postBackgrounds.map((bg, i) => (
                                    <img src={bg} key={i} alt=""/>
                                ))
                            }
                        </div>
                    )
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