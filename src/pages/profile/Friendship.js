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
                        {
                            friendsMenu && (
                                <div className="open_cover_menu">
                                    <div className="open_cover_menu_item">
                                        <img src="../../../icons/favoritesOutline.png" alt=""/>
                                        Favorites
                                    </div>
                                    <div className="open_cover_menu_item">
                                        <img src="../../../icons/editFriends.png" alt=""/>
                                        Edit Friend list
                                    </div>
                                    {
                                        friendship.following ? (
                                            <div className="open_cover_menu_item">
                                                <img src="../../../icons/unfollowOutlined.png" alt=""/>
                                                Unfollow
                                            </div>
                                        ) : (
                                            <div className="open_cover_menu_item">
                                                <img src="../../../icons/unfollowOutlined.png" alt=""/>
                                                Follow
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                ) : ("")
            }
        </div>
    );
}