import axios from "axios";

const http = axios.create({
    baseURL: "http://unical.kahero.uz/back-api/admin",
})

export default http;