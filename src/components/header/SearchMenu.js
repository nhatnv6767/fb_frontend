import {Return, Search} from "../../svg";

export default function SearchMenu() {
    return (
        <div className="header_left search_area scrollbar">
            <div className="search_wrap">
                <div className="header_logo">
                    <div className="circle hover1">
                        <Return/>
                    </div>
                </div>
                <div className="search">
                    <div>
                        <Search/>
                    </div>
                </div>
            </div>
        </div>
    );
}