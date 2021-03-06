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

export default function Profile() {
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
    return (
        <div className="profile">
            <Header page="profile"/>
            <div className="profile_top">
                <div className="profile_container">
                    <Cover
                        cover={profile.cover}
                    />
                    <ProfilePictureInfos
                        profile={profile}
                    />
                    <ProfileMenu/>
                </div>
            </div>
        </div>
    );
}