import axios from 'axios';

const blogFecth = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json"
    },
});

export default blogFecth;