import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useReducer, useState} from "react";
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
import Photos from "../../components/post/Photos";

export default function Profile({setVisible}) {
    const {username} = useParams();
    const {user} = useSelector((state) => ({...state}));

    const navigate = useNavigate();
    var userName = username === undefined ? user.username : username;
    const [{loading, error, profile}, dispatch] = useReducer(profileReducer, {
        loading: false,
        profile: {},
        error: ""
    });

    useEffect(() => {
        getProfile();
    }, [userName]);
    // var visitor = userName === user.username ? false : true;
    var visitor = userName !== user.username;
    console.log(visitor);
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
    // console.log(profile);
    return (
        <div className="profile">
            <Header page="profile"/>
            <div className="profile_top">
                <div className="profile_container">
                    <Cover
                        cover={profile.cover}
                        visitor={visitor}
                    />
                    <ProfilePictureInfos
                        profile={profile}
                        visitor={visitor}
                    />
                    <ProfileMenu/>
                </div>
            </div>
            <div className="profile_bottom">
                <div className="profile_container">
                    <div className="bottom_container">
                        <PplYouMayKnow/>
                        <div className="profile_grid">
                            <div className="profile_left">
                                <Photos/>
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