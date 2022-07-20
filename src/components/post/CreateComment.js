import {useState, useEffect, useRef} from "react";

export default function CreateComment({user}) {
    const [picker, setPicker] = useState(false);
    const [text, setText] = useState(false);
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
        <div className="create_comment_wrap">
            <div className="create_comment">
                <img src={user?.picture} alt=""/>
                <div className="comment_input_wrap">
                    <input type="file" hidden/>
                    <input type="text" ref={textRef}/>
                </div>
            </div>
        </div>
    );
}