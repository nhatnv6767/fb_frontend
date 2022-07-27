import "./style.css";
import {useState} from "react";

export default function Intro({details}) {
    const initial = {
        bio: details?.bio ? details.bio : "",
        otherName: details?.otherName ? details.otherName : "",
        job: details?.job ? details.job : "",
        workplace: details?.workplace ? details.workplace : "Google",
        highSchool: details?.highSchool ? details.highSchool : "",
        college: details?.college ? details.college : "",
        currentCity: details?.currentCity ? details.currentCity : "",
        hometown: details?.hometown ? details.hometown : "",
        relationship: details?.relationship ? details.relationship : "",
        instagram: details?.instagram ? details.instagram : "",
    };
    const [infos, setInfos] = useState(initial);
    return (
        <div className="profile_card">
            <div className="profile_card_header">Intro</div>
            {
                infos.job && infos.workplace ? (
                        <div className="info_profile">
                            <img src="../../../icons/job.png" alt=""/>
                            works as {infos.job} at<b>{infos.workplace}</b>
                        </div>
                    )
                    : infos.job && !infos.workplace ? (
                        <div className="info_profile">
                            <img src="../../../icons/job.png" alt=""/>
                            works as {infos.job}
                        </div>
                    ) : infos.workplace && !infos.job && (
                        <div className="info_profile">
                            <img src="../../../icons/job.png" alt=""/>
                            works at {infos.workplace}
                        </div>
                    )
            }
        </div>
    );
}