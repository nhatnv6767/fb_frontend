import React from 'react';
import Header from "../../components/header";
import useClickOutside from "../../helpers/clickOutside";

export default function Home() {
    useClickOutside();
    return (
        <div>
            <Header/>
            <div className="card"></div>
        </div>
    );
}