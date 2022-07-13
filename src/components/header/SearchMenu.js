import {Return, Search} from "../../svg";
import {useRef} from "react";
import useClickOutside from "../../helpers/clickOutside";

export default function SearchMenu({color, setShowSearchMenu}) {
    const menu = useRef(null);
    useClickOutside(menu, () => {
        setShowSearchMenu(false);
    });
    return (
        <div className="header_left search_area scrollbar" ref={menu}>
            <div className="search_wrap">
                <div className="header_logo">
                    <div className="circle hover1">
                        <Return color={color}/>
                    </div>
                </div>
                <div className="search">
                    <div>
                        <Search color={color}/>
                    </div>
                    <input type="text" placeholder="Search Facebook"/>
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