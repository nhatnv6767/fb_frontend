import "./style.css";

export default function LeftHome({user}) {
    return (
        <div className="left_home">
            <div className="left_link">
                <img src={user?.picture} alt=""/>
                <span>{user?.first_name} {user?.last_name}</span>
            </div>
        </div>
    );
}