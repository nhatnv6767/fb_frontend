export default function Bio({infos, handleBioChange}) {
    return (
        <div className="add_bio_wrap">
            <textarea
                placeholder="Add Bio"
                name="bio"
                value={infos?.bio}
                maxLength="100"
                className="textarea_blue details_input"
                onChange={handleBioChange}
            >

            </textarea>
        </div>
    );
}