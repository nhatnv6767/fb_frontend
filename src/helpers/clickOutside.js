import {useEffect} from "react";

/* `ref` is a reference to the element that we want to detect the outside click on. `fun` is the function that we want to
call when the outside click is detected. */
export default function useClickOutside(ref, fun) {
    useEffect(() => {
        const listener = (e) => {
            /* Checking if the click is outside of the ref. */
            if (!ref.current || ref.current.contains(e.target)) {
                return;
            }
            fun();
        };
        /* `mousedown` is an event that is triggered when the mouse is pressed down on an element. */
        document.addEventListener("mousedown", listener);
        /* `touchstart` is an event that is triggered when the user touches an element. */
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, []);

}