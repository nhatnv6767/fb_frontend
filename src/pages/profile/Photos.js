import {useEffect, useReducer} from "react";
import {profileReducer} from "../../functions/reducers";
import axios from "axios";

export default function Photos({username, token}) {
    const [{loading, error, photos}, dispatch] = useReducer(photosReducer, {
        loading: false,
        photos: {},
        error: ""
    });

    useEffect(() => {
        getPhotos();
    }, [username]);

    const getPhotos = async () => {
        try {
            dispatch({
                type: "PHOTOS_REQUEST",
            });
            const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getProfile/${userName}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            dispatch({
                type: "PHOTOS_SUCCESS",
                payload: data,
            });

        } catch (e) {
            dispatch({
                type: "PHOTOS_ERROR",
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