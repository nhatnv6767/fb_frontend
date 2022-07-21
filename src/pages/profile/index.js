import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useReducer} from "react";
import {profileReducer} from "../../functions/reducers";

export default function Profile() {
    const {username} = useParams();
    const {user} = useSelector((state) => ({...state}));
    var userName = username === undefined ? user.username : username;
    const [{loading, error, profile}, dispatch] = useReducer(profileReducer, {
        loading: false,
        posts: [],
        error: ""
    });
    return (
        <div>
            Profile
        </div>
    );
}