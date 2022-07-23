export default function ProfilePictureInfos({profile}) {
    return (
        <div className="profile_img_wrap">
            <div className="profile_w_left">
                <div className="profile_w_img">
                    <div className="profile_w_bg" style={{
                        backgroundSize: "cover",
                        backgroundImage: `url(${profile.picture})`
                    }}></div>
                </div>
            </div>
        </div>
    );
}