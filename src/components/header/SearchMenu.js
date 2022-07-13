import {Return, Search} from "../../svg";
import {useRef} from "react";
import useClickOutside from "../../helpers/clickOutside";

/* Destructuring the props object. */
export default function SearchMenu({color, setShowSearchMenu}) {
    const menu = useRef(null);
    const input = useRef(null);
    useClickOutside(menu, () => {
        setShowSearchMenu(false);
    });
    return (
        <div className="header_left search_area scrollbar" ref={menu}>
            <div className="search_wrap">
                <div className="header_logo">
                    <div className="circle hover1" onClick={() => {
                        setShowSearchMenu(false);
                    }}>
                        <Return color={color}/>
                    </div>
                </div>
                <div className="search" onClick={() => {
                    input.current.focus();
                }}>
                    <div>
                        <Search color={color}/>
                    </div>
                    <input type="text" placeholder="Search Facebook" ref={input}/>
                </div>
            </div>
            <div className="search_history_header">
                <span>Recent searches</span>
                <a>Edit</a>
            </div>
            <div className="search_history"></div>
            <div className="search_results scrollbar"></div>
        </div>
    );
}