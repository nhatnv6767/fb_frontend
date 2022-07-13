import {useEffect} from "react";

/* `ref` is a reference to the element that we want to detect the outside click on. `fun` is the function that we want to
call when the outside click is detected. */
export default function useClickOutside(ref, fun) {
    useEffect(() => {
        const listener = (e) => {
            /* Checking if the click is outside of the ref. */
            /* `ref.current` is a reference to the element that we want to detect the outside click on. If `ref.current` is
            `null`, then the element has not been rendered yet. */
            /* `ref.current.contains(e.target)` is checking if the element that was clicked on is inside of the element
            that we
            want to detect the outside click on. */
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
        /* `[]` is the second argument to `useEffect`. It is an array of dependencies. If the array is empty, then the
        function will only be called once. If the array is not empty, then the function will be called every time one of the
        dependencies changes. */
    }, []);

}