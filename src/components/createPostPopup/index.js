import "./style.css";

export default function CreatePostPopup({user}) {
    return (
        <div className="blur">
            <div className="postBox">
                <div className="box_header">
                    <div className="small_circle">
                        <i className="exit_icon"></i>
                    </div>
                    <span>Create Post</span>
                </div>
                <div className="box_profile">
                    <img src={user?.picture} alt=""/>
                    <div className="box_col">
                        <div className="box_profile_name">
                            {user?.first_name} {user?.last_name}
                        </div>
                        <div className="box_privacy">
                            <img src="../../../icons/public.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}