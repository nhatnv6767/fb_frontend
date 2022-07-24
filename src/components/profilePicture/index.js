import "./style.css";
import {useRef} from "react";

export default function ProfilePicture() {
    const refInput = useRef(null);
    return (
        <div className="blur">
            <input type="file" ref={refInput}/>
        </div>
    );
}