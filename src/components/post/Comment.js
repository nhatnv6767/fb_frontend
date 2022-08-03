export default function Comment({comment}) {
    return (
        <div className="comment">
            <img src={comment?.commentBy.picture} alt="" className="comment_img"/>
        </div>
    );
}