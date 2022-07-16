import React, {useRef, useState} from 'react';
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import {useSelector} from "react-redux";
import RightHome from "../../components/home/right";
import Stories from "../../components/home/stories";
import "./style.css";
import CreatePost from "../../components/createPost";

export default function Activate() {
    const {user} = useSelector((user) => ({...user}));
    return (
        <div className="home">
            <Header/>
            <LeftHome user={user}/>
            <div className="home_middle">
                <Stories/>
                <CreatePost user={user}/>
            </div>
            <RightHome user={user}/>
        </div>
    );
}