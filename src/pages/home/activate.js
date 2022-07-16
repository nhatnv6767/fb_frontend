import React, {useEffect, useRef, useState} from 'react';
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import {useSelector} from "react-redux";
import RightHome from "../../components/home/right";
import Stories from "../../components/home/stories";
import "./style.css";
import CreatePost from "../../components/createPost";
import ActivateForm from "./ActivateForm";
import {useParams} from "react-router-dom";
import async from "async";

export default function Activate() {
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

        } catch (e) {
            setError(e.response.data.message)
        }
    }
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