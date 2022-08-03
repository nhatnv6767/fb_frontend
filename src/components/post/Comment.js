export default function Comment({comment}) {
    return (
        <div className="comment">
            <img src={comment?.commentBy.picture} alt=""/>
        </div>
    );
}