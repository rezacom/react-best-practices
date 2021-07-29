import axios from "axios";

export const postsService = () => {
    const res = axios.get("https://jsonplaceholder.typicode.com/posts")
    return res
}