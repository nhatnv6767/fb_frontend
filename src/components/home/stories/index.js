import "./style.css";
import {Plus} from "../../../svg";
import {stories} from "../../../data/home";
import Story from "./Story";

export default function Stories() {
    return (
        <div className="stories">
            <div className="create_story_card">
                <img src="../../../images/default_pic.png" alt="" className="create_story_img"/>
                <div className="plus_story">
                    <Plus color="#fff"/>
                </div>
                <div className="story_create_text">Create Story</div>
            </div>
            {
                stories.map((story, i) => (
                    <Story story={story}/>
                ))
            }
        </div>
    );
}