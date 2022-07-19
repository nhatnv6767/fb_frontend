import {Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";
import Activate from "./pages/home/activate";
import Reset from "./pages/reset";
import CreatePostPopup from "./components/createPostPopup";
import {useSelector} from "react-redux";
import {useState} from "react";

function reducer(state, action) {
    switch (action.type) {
        case "POSTS_REQUEST":
            return {...state, loading: true, error: ""};
    }
}

function App() {

    const [visible, setVisible] = useState(false);
    const {user} = useSelector((state) => ({...state}));
    return (
        <div>
            {
                visible &&
                <CreatePostPopup
                    user={user}
                    setVisible={setVisible}
                />
            }

            <Routes>
                <Route element={<LoggedInRoutes/>}>
                    <Route path="/profile" element={<Profile/>} exact/>
                    <Route path="/" element={<Home setVisible={setVisible}/>} exact/>
                    <Route path="/activate/:token" element={<Activate/>} exact/>
                </Route>
                <Route element={<NotLoggedInRoutes/>}>
                    <Route path="/login" element={<Login/>} exact/>
                </Route>
                <Route path="/reset" element={<Reset/>} exact/>
            </Routes>
        </div>
    );
}

export default App;
/* `element` is a prop that is passed to the `Route` component. It is used to render the component that
is passed to it. */