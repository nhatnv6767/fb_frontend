import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {Outlet} from "react-router-dom";

export default function NotLoggedInRoutes() {
    /* A hook that allows us to access the Redux store. */
    const {user} = useSelector((state) => ({...state}));
    return user ? <Navigate to="/"/> : <Outlet/>;
}