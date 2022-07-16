import PropagateLoader from "react-spinners/PropagateLoader";

export default function ActivateForm({type, header, text, loading}) {
    return (
        <div className="blur">
            <div className="popup">
                <div className="popup_header">
                    Account verification succeeded
                </div>
                <div className="popup_message">
                    Account verification succeeded
                </div>
            </div>
            <PropagateLoader
                color="#1876f2"
                size={30}
                loading={true}
            />
        </div>
    );
}