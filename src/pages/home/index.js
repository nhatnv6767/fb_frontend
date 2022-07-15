import React, {useRef, useState} from 'react';
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import {useSelector} from "react-redux";

export default function Home() {
    const {user} = useSelector((user) => ({...user}));
    return (
        <div>
            <Header/>
            <LeftHome user={user}/>
        </div>
    );
}