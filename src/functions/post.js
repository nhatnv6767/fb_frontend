import axios from "axios";

export const createPost = async (
    type,
    background,
    text,
    images,
    user,
    token
) => {
    try {
        const {data} = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/createPost`, {
            type,
            background,
            text,
            images,
            user,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        // console.log("Data: ", data);
        return {status: "ok", data};
    } catch (e) {
        return e.response.data.message;
    }
};
export const reactPost = async (
    postId,
    react,
    token
) => {
    try {
        const {data} = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/reactPost`, {
            postId,
            react,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        // console.log("Data: ", data);
        return "ok";
    } catch (e) {
        return e.response.data.message;
    }
};
export const getReacts = async (
    postId,
    token
) => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getReacts/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        // console.log("Data: ", data);
        return data;
    } catch (e) {
        return e.response.data.message;
    }
};
export const comment = async (
    postId,
    comment,
    image,
    token
) => {
    try {
        const {data} = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/comment`, {
            postId,
            comment,
            image,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        // console.log("Data: ", data);
        return data;
    } catch (e) {
        return e.response.data.message;
    }
};
export const savePost = async (
    postId,
    token
) => {
    try {
        const {data} = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/savePost/${postId}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        // console.log("Data: ", data);
        return data;
    } catch (e) {
        return e.response.data.message;
    }
};
export const deletePost = async (
    postId,
    token
) => {
    try {
        const {data} = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/deletePost/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        // console.log("Data: ", data);
        return data;
    } catch (e) {
        return e.response.data.message;
    }
};