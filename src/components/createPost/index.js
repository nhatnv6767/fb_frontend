import "./style.css";

export default function CreatePost({user}) {
    return (
        <div className="createPost">
            <div className="createPost_header">
                <img src={user?.picture} alt=""/>
                <div className="open_post">
                    What's on your mind, {user?.first_name}
                </div>
            </div>
            <div className="create_splitter"></div>
        </div>
    );
}