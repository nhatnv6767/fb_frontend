import React, {useRef} from 'react';
import Header from "../../components/header";
import useClickOutside from "../../helpers/clickOutside";

export default function Home() {
    const el = useRef(null);
    useClickOutside(el, () => {
        el.current.style.display = "none";
    });
    return (
        <div>
            <Header/>
            <div className="card" ref={el}></div>
        </div>
    );
}