import Picker from "emoji-picker-react";

export default function EmojiPickerBackgrounds({picker, handleEmoji, setPicker}) {
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