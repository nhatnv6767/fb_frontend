import "./style.css";
import {useRef, useState} from "react";
import EmojiPickerBackgrounds from "./EmojiPickerBackgrounds";
import AddToYourPost from "./AddToYourPost";
import ImagePreview from "./ImagePreview";
import useClickOutside from "../../helpers/clickOutside";
import {createPost} from "../../functions/post";
import PulseLoader from "react-spinners/PulseLoader";
import PostError from "./PostError";
import DataURIToBlob from "../../helpers/dataURIToBlob";
import {uploadImages} from "../../functions/uploadImages";

export default function CreatePostPopup({user, setVisible}) {
    const popup = useRef(null);
    const [text, setText] = useState("");
    const [showPrev, setShowPrev] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    // array to storage images
    const [images, setImages] = useState([]);
    const [background, setBackground] = useState("");

    useClickOutside(popup, () => {
        setVisible(false);
    });

    const postSubmit = async () => {
        if (background) {
            // include background
            setLoading(true);
            const response = await createPost(
                null,
                background,
                text,
                null,
                user.id,
                user.token
            );
            setLoading(false);

            if (response === "ok") {
                setBackground("");
                setText("");
                setVisible(false);
            } else {
                setError(response);
            }
            // include images
        } else if (images && images.length) {
            setLoading(true);
            const postImages = images.map((img) => {
                return DataURIToBlob(img);
            });
            const path = `${user.username}/post Images`;
            /* Creating a formData object and appending the path and images to it. */
            let formData = new FormData();
            formData.append("path", path);
            postImages.forEach((image) => {
                formData.append("file", image);
            });
            const response = await uploadImages(formData, path, user.token);
            await createPost(null, null, text, response, user.id, user.token);
            setLoading(false);
            setText("");
            setImages([]);
            setVisible(false);
            // Just only text
        } else if (text) {
            const response = await createPost(
                null,
                null,
                text,
                null,
                user.id,
                user.token
            );
            setLoading(false);

            if (response === "ok") {
                setBackground("");
                setText("");
                setVisible(false);
            } else {
                setError(response);
            }
        } else {
            console.log("nothing");
        }
    };

    return (
        <div className="blur">
            <div className="postBox" ref={popup}>
                {
                    error &&
                    <PostError
                        error={error}
                        setError={setError}
                    />
                }
                <div className="box_header">
                    <div className="small_circle" onClick={() => {
                        setVisible(false);
                    }}>
                        <i className="exit_icon"></i>
                    </div>
                    <span>Create Post</span>
                </div>
                <div className="box_profile">
                    <img src={user?.picture} alt="" className="box_profile_img"/>
                    <div className="box_col">
                        <div className="box_profile_name">
                            {user?.first_name} {user?.last_name}
                        </div>
                        <div className="box_privacy">
                            <img src="../../../icons/public.png" alt=""/>
                            <span>Public</span>
                            <i className="arrowDown_icon"></i>
                        </div>
                    </div>
                </div>


                {
                    !showPrev ? (
                        <>
                            <EmojiPickerBackgrounds
                                text={text}
                                setText={setText}
                                user={user}
                                showPrev={showPrev}
                                setBackground={setBackground}
                                background={background}
                            />
                        </>
                    ) : (
                        <ImagePreview
                            text={text}
                            user={user}
                            setText={setText}
                            showPrev={showPrev}
                            images={images}
                            setImages={setImages}
                            setShowPrev={setShowPrev}
                        />
                    )
                }
                <AddToYourPost
                    setShowPrev={setShowPrev}
                />
                <button
                    className="post_submit"
                    onClick={() => {
                        postSubmit();
                    }}
                    disabled={loading}
                >
                    {
                        loading ? <PulseLoader color="#fff" size="5"/> : "Post"
                    }
                </button>
            </div>
        </div>
    );
}