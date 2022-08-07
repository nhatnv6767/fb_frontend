import {Link} from "react-router-dom";
import {cancelRequest} from "../../functions/user";

export default function Card({userr, type}) {
    const cancelRequestHandler = async (userId) => {
        await cancelRequest()
    }
    return (
        <div className="req_card">
            <Link to={`/profile/${userr?.username}`}>
                <img src={userr?.picture} alt=""/>
            </Link>
            <div className="req_name">
                {userr?.first_name} {userr?.last_name}
            </div>
            {
                type === "sent" ?
                    (
                        <button
                            className="blue_btn"
                            onClick={() => cancelRequestHandler(userr?._id)}
                        >
                            Cancel Request
                        </button>
                    )
                    : (
                        type === "requests" ?
                            (
                                <>
                                    <button className="blue_btn">Confirm</button>
                                    <button className="gray_btn">Delete</button>
                                </>
                            )
                            : ("")
                    )
            }
        </div>
    );
}