import React, {useRef, useState} from 'react';
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import {useSelector} from "react-redux";
import RightHome from "../../components/home/right";
import Stories from "../../components/home/stories";
import "./style.css";
import CreatePost from "../../components/createPost";
import SendVerification from "../../components/home/sendVerification";

export default function Home({setVisible, posts}) {
    const {user} = useSelector((state) => ({...state}));
    return (
        <div className="home">
            <Header/>
            <LeftHome user={user}/>
            <div className="home_middle">
                <Stories/>
                {
                    !user.verified && <SendVerification user={user}/>
                }

                <CreatePost user={user} setVisible={setVisible}/>
                <div className="posts">
                    {
                        posts.map((post) => (
                            <div className="post" key={post._id}>
                                {post._id}
                            </div>
                        ))
                    }
                </div>
            </div>
            <RightHome user={user}/>
        </div>
    );
}