import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useReducer, useState} from "react";
import {profileReducer} from "../../functions/reducers";
import axios from "axios";
import Header from "../../components/header";
import "./style.css";

export default function Profile() {
    const {username} = useParams();
    const {user} = useSelector((state) => ({...state}));
    const [showCoverMenu, setShowCoverMenu] = useState(true);
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
                    <div className="profile_cover">
                        {
                            profile.cover &&
                            <img src={profile.cover} className="cover" alt=""/>
                        }
                        <div className="update_cover_wrapper">
                            <div
                                className="open_cover_update"
                                onClick={() => setShowCoverMenu((prev) => !prev)}
                            >
                                <i className="camera_filled_icon"></i>
                                Add Cover Photo
                            </div>
                            {
                                showCoverMenu && (
                                    <div className="open_cover_menu">
                                        <div className="open_cover_menu_item">
                                            <i className="photo_icon"></i>
                                            Select Photo
                                        </div>
                                        <div className="open_cover_menu_item">
                                            <i className="upload_icon"></i>
                                            Upload Photo
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}