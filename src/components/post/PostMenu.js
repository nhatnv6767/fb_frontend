import MenuItem from "./MenuItem";
import {useState} from "react";

export default function PostMenu({postUserId, userId, imagesLength}) {
    const [test, setTest] = useState(postUserId === userId ? true : false);
    return (
        <ul className="post_menu">
            {
                test && (
                    <MenuItem
                        icon="pin_icon"
                        title="Pin Post"
                    />
                )
            }


            <MenuItem
                icon="save_icon"
                title="Save Post"
                subtitle="Add this to your saved items."
            />

            <div className="line"></div>

            {
                test && (
                    <MenuItem
                        icon="edit_icon"
                        title="Edit Post"
                    />
                )
            }

            {
                imagesLength && (
                    <MenuItem
                        icon="download_icon"
                        title="Download"
                    />
                )
            }

            {
                imagesLength && (
                    <MenuItem
                        icon="fullscreen_icon"
                        title="Enter Fullscreen"
                    />
                )
            }

            {
                test && (
                    <MenuItem
                        img="../../../icons/lock.png"
                        title="Edit audience"
                    />
                )
            }

            {
                test && (
                    <MenuItem
                        icon="turnOffNotifications_icon"
                        title="Turn off notifications for this post"
                    />
                )
            }

            {
                test && (
                    <MenuItem
                        icon="delete_icon"
                        title="Turn off translations"
                    />
                )
            }

        </ul>
    );
}