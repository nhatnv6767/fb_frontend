export default function UpdateProfilePicture({setImage}) {
    return (
        <div className="postBox update_img">
            <div className="box_header">
                <div className="small_circle" onClick={() => setImage("")}>
                    <i className="exit_icon"></i>
                </div>
                <span>Update profile picture</span>
            </div>
            <div className="update_image_desc">
                <textarea
                    placeholder="Description"
                    className="textarea_blue details_input"
                >
                </textarea>
            </div>
        </div>
    );
}