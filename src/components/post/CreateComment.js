import {useState} from "react";

export default function CreateComment({user}) {
    const [picker, setPicker] = useState(false);
    return (
        <div className="create_comment_wrap">
            <div className="create_comment">
                <img src={user?.picture} alt=""/>
                <div className="comment_input_wrap">

                </div>
            </div>
        </div>
    );
}