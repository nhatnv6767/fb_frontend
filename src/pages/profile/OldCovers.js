import {useSelector} from "react-redux";

export default function OldCovers({photos, setCoverPicture}) {
    const {user} = useSelector((state) => ({...state}));
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

                <div className="old_pictures_wrap scrollbar">
                    <h4>Your cover pictures</h4>
                    <div className="old_pictures">
                        {
                            photos &&
                            photos.filter((img) =>
                                img.folder === `${user.username}/cover_pictures`)
                                .map((photo) => (
                                    <img
                                        src={photo.secure_url}
                                        key={photo.public_id}
                                        alt=""
                                        onClick={() => setCoverPicture(photo.secure_url)}
                                    />
                                ))
                        }
                    </div>

                    <h4>Other pictures</h4>
                    <div className="old_pictures">
                        {
                            photos &&
                            photos.filter((img) =>
                                img.folder !== `${user.username}/post_images`)
                                .map((photo) => (
                                    <img
                                        src={photo.secure_url}
                                        key={photo.public_id}
                                        alt=""
                                        onClick={() => setCoverPicture(photo.secure_url)}
                                    />
                                ))
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}