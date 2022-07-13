import React, {useRef} from 'react';
import Header from "../../components/header";
import useClickOutside from "../../helpers/clickOutside";

export default function Home() {
    const el = useRef(null);
    useClickOutside(el, () => {
        /* `current` is a property of the `el` ref. It is a reference to the DOM element. */
        el.current.style.display = "none";
    });
    return (
        <div>
            <Header/>
            <div
                /* A React hook that allows us to access the DOM element. */
                className="card" ref={el}
            >

            </div>
        </div>
    );
}