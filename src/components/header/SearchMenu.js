import {Return, Search} from "../../svg";
import {useEffect, useRef, useState} from "react";
import useClickOutside from "../../helpers/clickOutside";
import async from "async";
import {search} from "../../functions/user";

/* Destructuring the props object. */
export default function SearchMenu({color, setShowSearchMenu}) {
    const [iconVisible, setIconVisible] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const menu = useRef(null);
    const input = useRef(null);
    useClickOutside(menu, () => {
        setShowSearchMenu(false);
    });
    useEffect(() => {
        input.current.focus();
    }, []);
    const searchHandler = async () => {
        if (searchTerm === "") {
            setResults([]);
        } else {
            const res = await search(searchTerm,);
        }
    };
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
                <div
                    className="search"
                    onClick={() => {
                        input.current.focus();
                    }}
                >
                    {
                        iconVisible && (
                            <div>
                                <Search color={color}/>
                            </div>
                        )
                    }

                    <input
                        type="text"
                        placeholder="Search Facebook"
                        ref={input}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyUp={searchHandler}
                        onFocus={() => {
                            setIconVisible(false);
                        }}
                        /* A callback function that is called when the input loses focus. */
                        onBlur={() => {
                            setIconVisible(true);
                        }}
                    />
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