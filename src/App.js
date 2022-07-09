import {Routes, Route} from "react-router-dom";
import Login from "./pages/login";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login/>} exact/>
            </Routes>
        </div>
    );
}

export default App;
