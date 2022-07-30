import Detail from "./Detail";

export default function EditDetails({details, handleChange, updateDetails, infos}) {
    return (
        <div className="blur">
            <div className="postBox infosBox">
                <div className="box_header">
                    <div className="small_circle">
                        <i className="exit_icon"></i>
                    </div>
                    <span>Edit Details</span>
                </div>
                <div className="details_wrapper scrollbar">
                    <div className="details_col">
                        <span>Customize Your Intro</span>
                        <span>Details you select will be public</span>
                    </div>
                    <div className="details_header">Other Name</div>
                    <Detail
                        value={details?.otherName}
                        img="studies"
                        placeholder="Add other name"
                        name="otherName"
                        text="Other Name"
                        handleChange={handleChange}
                        updateDetails={updateDetails}
                        infos={infos}
                    />

                    <div className="details_header">Work</div>
                    <Detail
                        value={details?.job}
                        img="job"
                        placeholder="Add job title"
                        name="job"
                        text="a job"
                        handleChange={handleChange}
                        updateDetails={updateDetails}
                        infos={infos}
                    />
                    <Detail
                        value={details?.workplace}
                        img="job"
                        placeholder="Add a workplace"
                        name="workplace"
                        text="a workplace"
                        handleChange={handleChange}
                        updateDetails={updateDetails}
                        infos={infos}
                    />
                </div>
            </div>
        </div>
    );
}