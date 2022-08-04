import React, {useEffect, useRef, useState} from 'react';
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import {useSelector} from "react-redux";
import RightHome from "../../components/home/right";
import Stories from "../../components/home/stories";
import "./style.css";
import CreatePost from "../../components/createPost";
import SendVerification from "../../components/home/sendVerification";
import Post from "../../components/post";

export default function Home({setVisible, posts, loading}) {
    const {user} = useSelector((state) => ({...state}));
    const middle = useRef(null);
    const [height, setHeight] = useState();
    useEffect(() => {
        setHeight(middle.current.clientHeight);
    }, [loading]);

    return (
        <div className="home" style={{height: `${height + 150}px`}}>
            <Header page="home"/>
            <LeftHome user={user}/>
            <div className="home_middle" ref={middle}>
                <Stories/>
                {
                    user.verified === false && <SendVerification user={user}/>
                }

                <CreatePost user={user} setVisible={setVisible}/>
                <div className="posts">
                    {
                        posts.map((post) => (
                            <Post key={post._id} post={post} user={user}/>
                        ))
                    }
                </div>
            </div>
            <RightHome user={user}/>
        </div>
    );
}