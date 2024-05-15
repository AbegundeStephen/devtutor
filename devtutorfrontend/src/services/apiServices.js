import axios from 'axios'
import {toast} from 'react-toastify'

const BACKEND_URL = "http://localhost:3000"

 const login = async(Data) => {
    try {
        const res = await axios.post(
            `${BACKEND_URL}/api/users/login`,Data
        );
        if (res.statusText === "OK") {
            toast.success("Login Successful...");
          }
          console.log(res)
          return res.data;
    }catch(err) {
        const message = (err.response && err.response.data && err.response.data.message) ||
        err.message || err.toString();
        toast.error(message);
    }
};

export default login
