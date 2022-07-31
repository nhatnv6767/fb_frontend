import {useState} from "react";

export default function Friendship() {
    const [friendsMenu, setFriendsMenu] = useState(true);
    const friendship = {
        friends: true,
        following: false,
        requestSent: false,
        requestReceived: false,
    };
    return (
        <div className="friendship">
            {
                friendship.friends ? (
                    <div className="friends_menu_wrap">
                        <button className="gray_btn">
                            <img src="../../../icons/friends.png" alt=""/>
                            <span>Friends</span>
                        </button>
                    </div>
                ) : ("")
            }
        </div>
    );
}