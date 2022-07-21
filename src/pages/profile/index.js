import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Profile() {
    const {username} = useParams();
    const {user} = useSelector((state) => ({...state}));
    var userName = username === undefined ? user.username : username;
    console.log(userName);
    return (
        <div>
            Profile
        </div>
    );
}