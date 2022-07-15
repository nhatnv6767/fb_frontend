import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";
import Login from "../pages/login";

export default function LoggedInRoutes() {
    // use Redux
    const {user} = useSelector((state) => ({...state}));
    /* A component from `react-router-dom` that renders the component that matches the current route. */
    return user ? <Outlet/> : <Login/>;
}