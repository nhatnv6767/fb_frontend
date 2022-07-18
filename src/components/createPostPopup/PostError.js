export default function PostError({error, setError}) {
    return (
        <div className="postError">
            <div>{error}</div>
            <button className="blue_btn">Try again</button>
        </div>
    );
}