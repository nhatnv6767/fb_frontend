import {useEffect, useReducer} from "react";
import {profileReducer} from "../../functions/reducers";
import axios from "axios";

export default function Photos() {
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
    return (
        <div className="profile_card">
            <div className="profile_card_header">
                Photos
                <div className="profile_header_link">
                    See all photos
                </div>
            </div>
        </div>
    );
}