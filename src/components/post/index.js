import "./style.css";
import {Link} from "react-router-dom";
import Moment from "react-moment";
import {Dots, Public} from "../../svg";

export default function Post({post}) {
    return (
        <div className="post">
            <div className="post_header">
                <Link
                    to={`/profile/${post.user.username}`}
                    className="post_header_left"
                >
                    <img src={post.user.picture} alt=""/>
                    <div className="header_col">
                        <div className="post_profile_name">
                            {post.user.first_name} {post.user.last_name}
                            <div className="updated_p">
                                {
                                    post.type === "profilePicture" &&
                                    `updated ${post.user.gender === "male" ? "his" : "her"} profile picture`
                                }

                                {
                                    post.type === "cover" &&
                                    `updated ${post.user.gender === "male" ? "his" : "her"} cover picture`
                                }
                            </div>
                        </div>
                        <div className="post_profile_privacy_date">
                            <Moment fromNow interval={30}>
                                {post.createdAt}
                            </Moment>
                            <Public color="#828387"/>
                        </div>
                    </div>
                </Link>
                <div className="post_header_right hover1">
                    <Dots color="#828387"/>
                </div>
            </div>
            {
                post.background ?
                    (
                        <div
                            className="post_bg"
                            style={{backgroundImage: `url(${post.background})`}}
                        >
                            <div className="post_bg_text">{post.text}</div>
                        </div>
                    ) : (
                        <>
                            <div className="post_text">{post.text}</div>
                            {
                                post.images && post.images.length &&
                                <div>
                                    {
                                        post.images.map((image, i) => (
                                            <img src={image.url} key={i} alt=""/>
                                        ))
                                    }
                                </div>
                            }
                        </>
                    )
            }
        </div>
    );
}