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
                </div>
            </div>
        </div>
    );
}