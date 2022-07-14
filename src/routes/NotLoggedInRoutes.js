import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {Outlet} from "react-router-dom";

export default function NotLoggedInRoutes() {
    const {user} = useSelector((state) => ({...state}));
    return user ? <Navigate to="/"/> : <Outlet/>;
}