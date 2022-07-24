export default function Friends({friends}) {

    return (
        <div className="profile_card">
            <div className="profile_card_header">
                Friends
                <div className="profile_header_link">
                    See all friends
                </div>
            </div>
            <div className="profile_card_count">
                {
                    friends.total_count === 0 ? ""
                        : friends.total_count === 1 ? "1 Photo"
                            : `${friends.total_count} photos`
                }
            </div>
            <div className="profile_card_grid">
                {
                    friends && friends.length && friends.slice(0, 9).map((friend) => (
                        <div className="profile_photo_card">
                        </div>
                    ))
                }
            </div>
        </div>
    );
}