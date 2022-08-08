import {Link, useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useReducer, useRef, useState} from "react";
import {profileReducer} from "../../functions/reducers";
import axios from "axios";
import Header from "../../components/header";
import "./style.css";
import Cover from "./Cover";
import ProfilePictureInfos from "./ProfilePictureInfos";
import ProfileMenu from "./ProfileMenu";
import PplYouMayKnow from "./PplYouMayKnow";
import CreatePost from "../../components/createPost";
import GridPosts from "./GridPosts";
import Post from "../../components/post";
import Photos from "./Photos";
import Friends from "./Friends";
import Intro from "../../components/intro";
import {useMediaQuery} from "react-responsive";
import CreatePostPopup from "../../components/createPostPopup";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


export default function Profile({getAllPosts}) {
    const [visible, setVisible] = useState(false);
    const {username} = useParams();
    const navigate = useNavigate();
    const {user} = useSelector((state) => ({...state}));
    const [photos, setPhotos] = useState({});

    var userName = username === undefined ? user.username : username;
    const [{loading, error, profile}, dispatch] = useReducer(profileReducer, {
        loading: false,
        profile: {},
        error: ""
    });

    useEffect(() => {
        getProfile();
    }, [userName]);
    useEffect(() => {
        setOthername(profile?.details?.otherName);
    }, [profile]);

    // var visitor = userName === user.username ? false : true;
    var visitor = userName !== user.username;
    const [othername, setOthername] = useState();
    const path = `${userName}/*`;
    const max = 30;
    const sort = "desc";
    const getProfile = async () => {
        try {
            dispatch({
                type: "PROFILE_REQUEST",
            });
            const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getProfile/${userName}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                }
            });
            if (data.ok === false) {
                navigate("/profile");
            } else {
                try {
                    const images = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/listImages`,
                        {path, sort, max},
                        {
                            headers: {
                                Authorization: `Bearer ${user.token}`,
                            }
                        });
                    setPhotos(images.data);
                } catch (e) {
                    console.log(e);
                }
                dispatch({
                    type: "PROFILE_SUCCESS",
                    payload: data,
                });
            }

        } catch (e) {
            dispatch({
                type: "PROFILE_ERROR",
                payload: e.response.data.message,
            });
        }
    };

    const profileTop = useRef(null);
    const leftSide = useRef(null);
    const [height, setHeight,] = useState();
    const [leftHeight, setLeftHeight] = useState();
    const [scrollHeight, setScrollHeight] = useState();
    useEffect(() => {
        /* Setting the height of the profileTop div to the height of the profileTop div.
        * 300: pplumayknow
        * */
        setHeight(profileTop.current.clientHeight + 300);
        setLeftHeight(leftSide.current.clientHeight);
        /* Listening for the scroll event and calling the getScroll function. */
        window.addEventListener("scroll", getScroll, {passive: true});
        /* Removing the event listener. */
        return () => {
            window.addEventListener("scroll", getScroll, {passive: true});
        };

    }, [loading, scrollHeight]);

    const check = useMediaQuery({
        query: "(min-width: 901px)",
    });
    const getScroll = () => {
        setScrollHeight(window.pageYOffset);
    };

    // console.log(profile);
    return (
        <div className="profile">
            {
                visible &&
                <CreatePostPopup
                    user={user}
                    setVisible={setVisible}
                    posts={profile?.posts}
                    dispatch={dispatch}
                    profile
                />
            }
            <Header page="profile" getAllPosts={getAllPosts}/>
            <div className="profile_top" ref={profileTop}>
                <div className="profile_container">
                    {
                        loading ? (
                            <>
                                <div className="profile_cover">
                                    <Skeleton
                                        height="347px"
                                        containerClassName="avatar-skeleton"
                                        style={{borderRadius: "8px"}}
                                    />
                                </div>
                                <div
                                    className="profile_img_wrap"
                                    style={{
                                        marginBottom: "-3rem",
                                        transform: "translateY(-8px)"
                                    }}
                                >
                                    <div className="profile_w_left">
                                        <Skeleton
                                            circle
                                            height="180px"
                                            width="180px"
                                            containerClassName="avatar-skeleton"
                                            style={{transform: "translateY(-3.3rem)"}}
                                        />
                                        <div className="profile_w_col">
                                            <div className="profile_name">
                                                <Skeleton
                                                    height="35px"
                                                    width="200px"
                                                    containerClassName="avatar-skeleton"
                                                />
                                                <Skeleton
                                                    height="30px"
                                                    width="100px"
                                                    containerClassName="avatar-skeleton"
                                                    style={{transform: "translateY(2.5px)"}}
                                                />
                                            </div>
                                            <div className="profile_friend_count">
                                                <Skeleton
                                                    height="20px"
                                                    width="90px"
                                                    containerClassName="avatar-skeleton"
                                                    style={{marginTop: "5px"}}
                                                />
                                            </div>
                                            <div className="profile_friend_imgs">
                                                {
                                                    Array
                                                        .from(new Array(6), (val, i) => i + 1)
                                                        .map((id, i) => (
                                                                <Skeleton
                                                                    circle
                                                                    height="32px"
                                                                    width="32px"
                                                                    containerClassName="avatar-skeleton"
                                                                    style={{transform: `translateX(${-i * 7}px)`}}
                                                                />
                                                            )
                                                        )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="friendship">
                                        <Skeleton
                                            height="36px"
                                            containerClassName="avatar-skeleton"
                                        />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <Cover
                                    cover={profile.cover}
                                    visitor={visitor}
                                    photos={photos.resources}
                                />
                                <ProfilePictureInfos
                                    profile={profile}
                                    visitor={visitor}
                                    photos={photos.resources}
                                    othername={othername}
                                />
                            </>
                        )
                    }

                    <ProfileMenu/>
                </div>
            </div>
            <div className="profile_bottom">
                <div className="profile_container">
                    <div className="bottom_container">
                        <PplYouMayKnow/>
                        <div className={`profile_grid ${check
                        && scrollHeight >= height
                        && leftHeight > 1000
                            ? "scrollFixed showLess"
                            : check && scrollHeight >= height && leftHeight < 1000
                            && "scrollFixed showMore"
                        }`}>
                            <div className="profile_left" ref={leftSide}>
                                <Intro
                                    detailss={profile.details}
                                    visitor={visitor}
                                    setOthername={setOthername}
                                />
                                <Photos
                                    username={userName}
                                    token={user.token}
                                    photos={photos}
                                />
                                <Friends friends={profile.friends}/>
                                <div className="relative_fb_copyright">
                                    <Link to="/">Privacy </Link>
                                    <span>. </span>
                                    <Link to="/">Terms </Link>
                                    <span>. </span>
                                    <Link to="/">Advertising </Link>
                                    <span>. </span>
                                    <Link to="/">
                                        Ad Choices <i className="ad_choices_icon"></i>{" "}
                                    </Link>
                                    <span>. </span>
                                    <Link to="/"></Link>Cookies <span>. </span>
                                    <Link to="/">More </Link>
                                    <span>. </span> <br/>
                                    Meta © 2022
                                </div>
                            </div>
                            <div className="profile_right">
                                {
                                    !visitor && (
                                        <CreatePost
                                            user={user}
                                            profile
                                            setVisible={setVisible}
                                        />
                                    )
                                }
                                <GridPosts/>
                                <div className="posts">
                                    {
                                        profile.posts &&
                                        profile.posts.length ?
                                            profile.posts.map((post) => (
                                                <Post
                                                    post={post}
                                                    user={user}
                                                    key={post._id}
                                                    profile
                                                />
                                            ))
                                            :
                                            <div className="no_posts">No posts available</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}