import axios from "axios"

const apiRequest  = axios.create({
    baseURL : "https://njs-realestate-api.onrender.com/api", 
    // baseURL : "http://localhost:5000/api", 
    withCredentials:true,
})

export default apiRequest;