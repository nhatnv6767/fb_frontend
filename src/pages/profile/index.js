import React from 'react';
import {useParams} from "react-router-dom";

export default function Profile() {
    const {username} = useParams();
    console.log(username);
    return (
        <div>
            Profile
        </div>
    );
}