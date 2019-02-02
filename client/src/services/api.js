import axios from "axios";

export default {
    register: (userInfo) => {
        return axios.post("/api/users", userInfo)
            .then(newUser => newUser.data)
    }
}