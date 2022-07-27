export default function OldCovers({photos}) {
    return (
        <div className="blur">
            <div className="postBox selectCoverBox">
                <div className="box_header">
                    <div className="small_circle">
                        <i className="exit_icon"></i>
                    </div>
                    <span>Select photo</span>
                </div>
                <div className="selectCoverBox_links">
                    <div className="selectCoverBox_link">Recent Photos</div>
                    <div className="selectCoverBox_link">Photo Albums</div>
                </div>
            </div>
        </div>
    );
}