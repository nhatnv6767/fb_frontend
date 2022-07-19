import "./style.css";
import {Link} from "react-router-dom";

export default function Post({post}) {
    return (
        <div className="post">
            <div className="post_header">
                <Link to={`/profile/${post.user.username}`} className="post_header_left">
                    <img src={post.user.picture} alt=""/>
                </Link>
            </div>
        </div>
    );
}