export default function Bio({
                                infos,
                                handleChange,
                                max,
                                setShowBio,
                                updateDetails,
                                placeholder,
                                name,
                                detail,
                                setShow,
                                rel,
                            }) {
    return (
        <div className="add_bio_wrap">
            {
                rel ? <select name={name}></select>
                    : (
                        <textarea
                            placeholder={placeholder}
                            name={name}
                            /* A way to access a property of an object using a variable. */
                            value={infos?.[name]}
                            maxLength="100"
                            className="textarea_blue details_input"
                            onChange={handleChange}
                        >

                        </textarea>
                    )
            }
            {
                !detail && (
                    <div className="remaining">{max} characters remaining</div>
                )
            }
            <div className="flex">
                <div className="flex flex_left">
                    <i className="public_icon"></i>Public
                </div>
                <div className="flex flex_right">
                    <button
                        className="gray_btn"
                        onClick={() => !detail ? setShowBio(false) : setShow(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="blue_btn"
                        onClick={() => {
                            updateDetails();
                            setShow(false);
                        }}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}