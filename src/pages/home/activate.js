import React, {useEffect, useRef, useState} from 'react';
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import {useDispatch, useSelector} from "react-redux";
import RightHome from "../../components/home/right";
import Stories from "../../components/home/stories";
import "./style.css";
import CreatePost from "../../components/createPost";
import ActivateForm from "./ActivateForm";
import {useNavigate, useParams} from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

export default function Activate() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((user) => ({...user}));
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    /* A hook that allows us to get the parameters from the URL. */
    const {token} = useParams();
    useEffect(() => {
        activateAccount();
    }, []);

    const activateAccount = async () => {
        try {
            setLoading(true);
            const {data} = await axios
                .post(`${process.env.REACT_APP_BACKEND_URL}/activate`,
                    {token},
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        }
                    });
            setSuccess(data.message);
            /* Setting the user cookie to the user object with the verified property set to true. */
            Cookies.set("user", JSON.stringify({...user, verified: true}));
            dispatch({
                type: "VERIFY",
                // make sure that we change the verify to true in the cookies and the element of store
                payload: true,
            });
            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (e) {
            setError(e.response.data.message);
            setTimeout(() => {
                navigate("/");
            }, 3000);
        }
    };
    return (
        <div className="home">
            {
                success && (
                    <ActivateForm
                        type="success"
                        header="Account verification succeeded."
                        text={success}
                        loading={loading}
                    />
                )
            }

            {
                error && (
                    <ActivateForm
                        type="error"
                        header="Account verification failed."
                        text={error}
                        loading={loading}
                    />
                )
            }
            <Header/>
            <LeftHome user={user}/>
            <div className="home_middle">
                <Stories/>
                <CreatePost user={user}/>
            </div>
            <RightHome user={user}/>
        </div>
    );
}