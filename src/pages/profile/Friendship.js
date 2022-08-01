import {useRef, useState} from "react";
import useClickOutside from "../../helpers/clickOutside";

export default function Friendship() {
    const [friendsMenu, setFriendsMenu] = useState(false);
    const menu = useRef(null);
    useClickOutside(menu, () => setFriendsMenu(false));
    const friendship = {
        friends: false,
        following: false,
        requestSent: true,
        requestReceived: false,
    };
    return (
        <div className="friendship">
            {
                friendship.friends ? (
                    <div className="friends_menu_wrap">
                        <button className="gray_btn" onClick={() => setFriendsMenu(true)}>
                            <img src="../../../icons/friends.png" alt=""/>
                            <span>Friends</span>
                        </button>
                        {
                            friendsMenu && (
                                <div className="open_cover_menu" ref={menu}>
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
                                    <div className="open_cover_menu_item">
                                        <i className="unfriend_outlined_icon"></i>
                                        Unfriend
                                    </div>
                                </div>
                            )
                        }
                    </div>
                ) : (
                    !friendship.requestSent &&
                    !friendship.requestReceived &&
                    (
                        <button className="blue_btn">
                            <img src="../../../icons/addFriend.png" alt="" className="invert"/>
                            <span>Add Friend</span>
                        </button>
                    )
                )
            }
            {
                friendship.requestSent ?
                    (
                        <button className="blue_btn">
                            <img src="../../../icons/cancelRequest.png" alt="" className="invert"/>
                            <span>Cancel Request</span>
                        </button>
                    ) : (
                        friendship.requestReceived && (
                            <div className="friends_menu_wrap">
                                <button className="gray_btn" onClick={() => setFriendsMenu(true)}>
                                    <img src="../../../icons/friends.png" alt=""/>
                                    <span>Friends</span>
                                </button>
                                {
                                    friendsMenu && (
                                        <div className="open_cover_menu" ref={menu}>
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
                                            <div className="open_cover_menu_item">
                                                <i className="unfriend_outlined_icon"></i>
                                                Unfriend
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        )

                    )
            }
        </div>
    );
}