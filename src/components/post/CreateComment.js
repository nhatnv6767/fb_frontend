export default function CreateComment({user}) {
    return (
        <div className="create_comment_wrap">
            <div className="create_comment">
                <img src={user?.picture} alt=""/>
                <div className="comment_input_wrap">

                </div>
            </div>
        </div>
    );
}