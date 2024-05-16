import axios from 'axios'

 const api = axios.create({
    baseURL:"http://locahost:5000/api",
    withCredentials:true,
    timeout:1000,
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    responseEncoding:'utf8',
    responseType: 'json',
})

export default api;

