import "./style.css";
import {useState} from "react";

export default function Intro() {
    const initial = {};
    const [infos, setInfos] = useState(initial);
    return (
        <div className="profile_card">
            <div className="profile_card_header">Intro</div>
        </div>
    );
}