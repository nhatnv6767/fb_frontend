import {useSelector} from "react-redux";

export default function LoggedInRoutes() {
    // use Redux
    const {user} = useSelector((state) => ({...state}));
}