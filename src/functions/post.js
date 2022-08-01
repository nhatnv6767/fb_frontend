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
        return "ok";
    } catch (e) {
        return e.response.data.message;
    }
};