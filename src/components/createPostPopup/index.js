import "./style.css";
import {useEffect, useRef, useState} from "react";
import Picker from "emoji-picker-react";

export default function CreatePostPopup({user}) {
    const [text, setText] = useState("");
    const [showPrev, setShowPrev] = useState(false);
    const [picker, setPicker] = useState(false);
    const textRef = useRef(null);
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
        <div className="blur">
            <div className="postBox">
                <div className="box_header">
                    <div className="small_circle">
                        <i className="exit_icon"></i>
                    </div>
                    <span>Create Post</span>
                </div>
                <div className="box_profile">
                    <img src={user?.picture} alt="" className="box_profile_img"/>
                    <div className="box_col">
                        <div className="box_profile_name">
                            {user?.first_name} {user?.last_name}
                        </div>
                        <div className="box_privacy">
                            <img src="../../../icons/public.png" alt=""/>
                            <span>Public</span>
                            <i className="arrowDown_icon"></i>
                        </div>
                    </div>
                </div>


                {
                    !showPrev && (
                        <div className="flex_center">
                            <textarea
                                ref={textRef}
                                maxLength="100"
                                value={text}
                                placeholder={`What's on your mind, ${user?.first_name}`}
                                className="post_input"
                                onChange={(e) => setText(e.target.value)}
                            >

                            </textarea>
                        </div>
                    )
                }
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

            </div>
        </div>
    );
}