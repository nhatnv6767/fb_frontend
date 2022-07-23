export default function GridPosts() {
    return (
        <div className="createPost">
            <div className="createPost_header">
                <div className="left_header_grid">Posts</div>
                <div className="flex">
                    <div className="gray_btn">
                        <i className="equalize_icon"></i>
                    </div>
                    <div className="gray_btn">
                        <i className="manage_icon"></i>
                        Manage Posts
                    </div>
                </div>
            </div>
            <div className="create_splitter"></div>
            <div className="createPost_body grid_2">
                <div className="view_type active_grid">
                    <i className="list_icon filter_blue"></i>
                </div>
            </div>
        </div>
    );
}