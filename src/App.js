import {Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import LoggedInRoutes from "./routes/LoggedInRoutes";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login/>} exact/>
                <Route element={<LoggedInRoutes/>}>
                    <Route path="/profile" element={<Profile/>} exact/>
                    <Route path="/" element={<Home/>} exact/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
/* `element` is a prop that is passed to the `Route` component. It is used to render the component that
is passed to it. */