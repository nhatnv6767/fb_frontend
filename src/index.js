import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/icons/icons.css";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById("root")
);
