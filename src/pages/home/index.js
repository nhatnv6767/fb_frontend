import React, {useRef, useState} from 'react';
import Header from "../../components/header";
import useClickOutside from "../../helpers/clickOutside";

export default function Home() {
    const [visible, setVisible] = useState(true);
    const el = useRef(null);

    useClickOutside(el, () => {
        setVisible(false);
    });
    return (
        <div>
            <Header/>
            {visible &&
                <div
                    /* A React hook that allows us to access the DOM element. */
                    className="card" ref={el}
                >

                </div>
            }
        </div>
    );
}