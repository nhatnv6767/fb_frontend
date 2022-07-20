import MenuItem from "./MenuItem";
import {useState} from "react";

export default function PostMenu({postUserId, userId}) {
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

        </ul>
    );
}