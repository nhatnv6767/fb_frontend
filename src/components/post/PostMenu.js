import MenuItem from "./MenuItem";

export default function PostMenu() {
    return (
        <ul className="post_menu">
            <MenuItem
                icon="pin_icon"
                title="Pin Post"
            />
        </ul>
    );
}