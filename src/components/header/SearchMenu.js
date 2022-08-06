import {Return, Search} from "../../svg";
import {useEffect, useRef, useState} from "react";
import useClickOutside from "../../helpers/clickOutside";
import async from "async";
import {addToSearchHistory, getSearchHistory, search} from "../../functions/user";
import {Link} from "react-router-dom";

/* Destructuring the props object. */
export default function SearchMenu({color, setShowSearchMenu, token}) {
    const [iconVisible, setIconVisible] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [searchHistory, setSearchHistory] = useState([]);
    const menu = useRef(null);
    const input = useRef(null);
    useClickOutside(menu, () => {
        setShowSearchMenu(false);
    });
    useEffect(async () => {
        await getHistory();
    }, []);
    const getHistory = async () => {
        const res = await getSearchHistory(token);
        setSearchHistory(res);
    };
    useEffect(() => {
        input.current.focus();
    }, []);
    const searchHandler = async () => {
        if (searchTerm === "") {
            setResults([]);
        } else {
            const res = await search(searchTerm, token);
            setResults(res);
        }
    };
    const addToSearchHistoryHandler = async (searchUser) => {
        const res = await addToSearchHistory(searchUser, token);
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
            {
                results === "" && (
                    <div className="search_history_header">
                        <span>Recent searches</span>
                        <a>Edit</a>
                    </div>
                )
            }
            <div className="search_history">
                {
                    searchHistory
                    && results === "" && searchHistory.map((user) => (
                        <div className="search_user_item hover1" key={user._id}>
                            <Link className="flex" to={`/profile/${user.username}`}>
                                <img src={user.picture} alt=""/>
                                <span>
                                {user.first_name} {user.last_name}
                            </span>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div className="search_results scrollbar">
                {
                    results && results.map((user, i) => (
                        <Link
                            to={`/profile/${user.username}`}
                            className="search_user_item hover1"
                            onClick={() => addToSearchHistoryHandler(user._id)}
                            key={user._id}
                        >
                            <img src={user.picture} alt=""/>
                            <span>
                                {user.first_name} {user.last_name}
                            </span>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}