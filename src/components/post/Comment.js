export default function Comment({comment}) {
    return (
        <div className="comment">
            <img src={comment?.commentBy.picture} alt="" className="comment_img"/>
            <div className="comment_col">
                <div className="comment_wrap">
                    <div className="comment_name">
                        {comment?.commentBy.first_name} {comment?.commentBy.last_name}
                    </div>
                    {
                        comment?.image && (
                            <img src={comment?.image} alt="" className="comment_image"/>
                        )
                    }
                </div>
            </div>
        </div>
    );
}