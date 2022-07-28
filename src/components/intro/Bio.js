export default function Bio({infos}) {
    return (
        <div className="add_bio_wrap">
            <textarea
                placeholder="Add Bio"
                name="bio"
                value={infos?.bio}
                className="textarea_blue details_input"
            >

            </textarea>
        </div>
    );
}