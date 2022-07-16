import "./style.css";
import {NewRoom} from "../../../svg";

export default function RightHome() {
    return (
        <div className="right_home">
            <div className="heading">Sponsored</div>
            <div className="splitter1"></div>
            <div className="contacts_wrap">
                <div className="contacts_header">
                    <div className="contacts_header_left">Contacts</div>
                    <div className="contacts_header_right">
                        <div className="contact_circle">
                            <NewRoom/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}