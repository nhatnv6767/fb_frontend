import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useReducer} from "react";
import {profileReducer} from "../../functions/reducers";
import axios from "axios";

export default function Profile() {
    const {username} = useParams();
    const {user} = useSelector((state) => ({...state}));
    var userName = username === undefined ? user.username : username;
    const [{loading, error, profile}, dispatch] = useReducer(profileReducer, {
        loading: false,
        profile: {},
        error: ""
    });

    useEffect(() => {

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

            dispatch({
                type: "PROFILE_SUCCESS",
                payload: data,
            });
        } catch (e) {
            dispatch({
                type: "PROFILE_ERROR",
                payload: e.response.data.message,
            });
        }
    };
    return (
        <div>
            Profile
        </div>
    );
}