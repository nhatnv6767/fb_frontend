import "./style.css";
import {useState} from "react";
import Bio from "./Bio";

export default function Intro({details, visitor}) {
    const initial = {
        bio: details?.bio ? details.bio : "Welcome to my profile ",
        otherName: details?.otherName ? details.otherName : "",
        job: details?.job ? details.job : "Web developer",
        workplace: details?.workplace ? details.workplace : "Google",
        highSchool: details?.highSchool ? details.highSchool : "BMW high school",
        college: details?.college ? details.college : "Nothing college",
        currentCity: details?.currentCity ? details.currentCity : "Japan",
        hometown: details?.hometown ? details.hometown : "Viet Nam",
        relationship: details?.relationship ? details.relationship : "Single",
        instagram: details?.instagram ? details.instagram : "bbnet0",
    };
    const [infos, setInfos] = useState(initial);
    const [showBio, setShowBio] = useState(true);
    const [max, setMax] = useState(infos?.bio ? 100 - infos?.bio.length : 100);
    const handleBioChange = (e) => {
        setInfos({...infos, bio: e.target.value});
        setMax(100 - e.target.value.length);
    };
    return (
        <div className="profile_card">
            <div className="profile_card_header">Intro</div>
            {
                infos?.bio &&
                <div className="info_col">
                    <span className="info_text">{infos.bio}</span>
                    {
                        !visitor && (
                            <button className="gray_btn hover1">Edit Bio</button>
                        )
                    }
                </div>
            }
            {
                showBio &&
                <Bio
                    infos={infos}
                    max={max}
                    handleBioChange={handleBioChange}
                />
            }
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
                infos?.relationship &&
                <div className="info_profile">
                    <img src="../../../icons/relationship.png" alt=""/>
                    {infos.relationship}
                </div>
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

            {
                infos?.instagram &&
                <div className="info_profile">
                    <img src="../../../icons/instagram.png" alt=""/>
                    <a href={`https://www.instagram.com/${infos.instagram}`} target="_blank">
                        {infos.instagram}
                    </a>
                </div>
            }

            {
                !visitor && (
                    <button className="gray_btn hover1 w100">Edit Details</button>

                )
            }

            {
                !visitor && (

                    <button className="gray_btn hover1 w100">Add Houbles</button>

                )
            }

            {
                !visitor && (

                    <button className="gray_btn hover1 w100">Add featured</button>
                )
            }
        </div>
    );
}