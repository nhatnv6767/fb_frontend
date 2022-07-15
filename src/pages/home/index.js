import React, {useRef, useState} from 'react';
import Header from "../../components/header";
import LeftHome from "../../components/home/left";

export default function Home() {

    return (
        <div>
            <Header/>
            <LeftHome/>
        </div>
    );
}