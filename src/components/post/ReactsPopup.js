export default function ReactsPopup() {
    const reactsArray = [
        {
            name: "like",
            image: "../../../reacts/like.gif",
        },
        {
            name: "love",
            image: "../../../reacts/love.gif",
        },
        {
            name: "haha",
            image: "../../../reacts/haha.gif",
        },
        {
            name: "wow",
            image: "../../../reacts/wow.gif",
        },
        {
            name: "sad",
            image: "../../../reacts/sad.gif",
        },
        {
            name: "angry",
            image: "../../../reacts/angry.gif",
        },
    ];
    return (
        <div className="reacts_popup">
            {
                reactsArray.map((react, i) => (
                    <div className="react" key={i}>
                        <img src={react.image} alt=""/>
                    </div>
                ))
            }
        </div>
    );
}