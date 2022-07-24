import {useEffect, useReducer} from "react";
import {photosReducer} from "../../functions/reducers";
import axios from "axios";

export default function Friends({friends}) {

    return (
        <div className="profile_card">
            <div className="profile_card_header">
                Photos
                <div className="profile_header_link">
                    See all photos
                </div>
            </div>
            <div className="profile_card_count">
                {
                    friends.total_count === 0 ? ""
                        : friends.total_count === 1 ? "1 Photo"
                            : `${friends.total_count} photos`
                }
            </div>
            <div className="profile_card_grid">
                {
                    friends && friends.length && friends.slice(0, 9).map((img) => (
                        <div className="profile_photo_card" key={img.public_id}>
                            <img src={img.secure_url} alt=""/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}