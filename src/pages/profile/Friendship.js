export default function Friendship() {
    const friendship = {
        friends: false,
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
                            <img src="../../../friends.png" alt=""/>
                            <span>Friends</span>
                        </button>
                    </div>
                ) : ("")
            }
        </div>
    );
}