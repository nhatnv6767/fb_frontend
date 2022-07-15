import "./style.css";
import LeftLink from "./LeftLink";
import {left} from "../../../data/home";
import {Link} from "react-router-dom";
import {ArrowDown1} from "../../../svg";

export default function LeftHome({user}) {
    return (
        <div className="left_home">
            <Link to="/profile" className="left_link hover1">
                <img src={user?.picture} alt=""/>
                <span>{user?.first_name} {user?.last_name}</span>
            </Link>
            {
                left.slice(0, 8).map((link, i) => (
                    <LeftLink
                        key={i}
                        img={link.img}
                        text={link.text}
                        notification={link.notification}
                    />
                ))
            }
            <div className="left_link hover1">
                <div className="small_circle">
                    <ArrowDown1/>
                </div>
                <span>See more</span>
            </div>
            <div className="more_left">
                {
                    left.slice(8, left.length).map((link, i) => (
                        <LeftLink
                            key={i}
                            img={link.img}
                            text={link.text}
                            notification={link.notification}
                        />
                    ))
                }
            </div>
        </div>
    );
}