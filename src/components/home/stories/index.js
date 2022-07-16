import "./style.css";
import {ArrowRight, Plus} from "../../../svg";
import {stories} from "../../../data/home";
import Story from "./Story";
import {useMediaQuery} from "react-responsive";

export default function Stories() {
    /* A hook that allows you to use media queries in react. */
    const query1175px = useMediaQuery({
        /* A media query that is being used to determine the size of the screen. */
        query: "(max-width: 1175px)",
    });
    const max = query1175px ? 4 : stories.length;
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
                stories.slice(0, max).map((story, i) => (
                    <Story story={story}/>
                ))
            }
            <div className="white_circle">
                <ArrowRight color="#65676b"/>
            </div>
        </div>
    );
}