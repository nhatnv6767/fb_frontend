import "./style.css";
import Header from "../../components/header";

export default function Friends() {
    return (
        <>
            <Header page="friends"/>
            <div className="friends">
                <div className="friends_left">
                    <div className="friends_left_header">
                        <h2>Friends</h2>
                        <div className="small_circle">
                            <i className="settings_filled_icon"></i>
                        </div>
                    </div>
                    <div className="friends_left_wrap">
                        <div className="mmenu_item hover3 active_friends">
                            <div className="small_circle" style={{background: "#1876f2"}}>
                                <i className="friends_home_icon invert"></i>
                            </div>
                            <span>Home</span>
                        </div>
                        <div className="mmenu_item hover3"></div>
                        <div className="mmenu_item hover3"></div>
                        <div className="mmenu_item hover3"></div>
                        <div className="mmenu_item hover3"></div>
                        <div className="mmenu_item hover3"></div>
                    </div>
                </div>
                <div className="friends_right"></div>
            </div>
        </>
    );
}