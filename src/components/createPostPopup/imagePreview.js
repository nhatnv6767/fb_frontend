import EmojiPickerBackgrounds from "./EmojiPickerBackgrounds";

export default function ImagePreview({text, setText, user}) {
    return (
        <div className="overflow_a">
            <EmojiPickerBackgrounds
                text={text}
                setText={setText}
                user={user}
                type2
            />
        </div>
    );
}

/**
 * We using the same components but the func not the same by type2 after component here
 *
 */