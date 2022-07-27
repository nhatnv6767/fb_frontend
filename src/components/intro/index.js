import "./style.css";
import {useState} from "react";

export default function Intro({details}) {
    const initial = {
        bio: details?.bio ? details.bio : "",
        otherName: details?.otherName ? details.otherName : "",
        job: details?.job ? details.job : "",
        workplace: details?.workplace ? details.workplace : "Google",
        highSchool: details?.highSchool ? details.highSchool : "BMW high school",
        college: details?.college ? details.college : "Nothing college",
        currentCity: details?.currentCity ? details.currentCity : "Japan",
        hometown: details?.hometown ? details.hometown : "Viet Nam",
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

            {
                infos?.college &&
                <div className="info_profile">
                    <img src="../../../icons/studies.png" alt=""/>
                    studied at {infos.college}
                </div>
            }

            {
                infos?.highSchool &&
                <div className="info_profile">
                    <img src="../../../icons/studies.png" alt=""/>
                    studied at {infos.highSchool}
                </div>
            }

            {
                infos?.currentCity &&
                <div className="info_profile">
                    <img src="../../../icons/home.png" alt=""/>
                    Lives in {infos.currentCity}
                </div>
            }

            {
                infos?.hometown &&
                <div className="info_profile">
                    <img src="../../../icons/home.png" alt=""/>
                    From {infos.hometown}
                </div>
            }
        </div>
    );
}