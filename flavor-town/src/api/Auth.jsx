import axios from "axios"

export default Auth = {
    check: async ()=>{
        const response = await axios.post('http://localhost/flavor-town/flavor-town-back/api/auth/check.php');
        const data = response.data;
        return data;
    },
    login: async (email, password)=>{
        const response = await axios.post('http://localhost/flavor-town/flavor-town-back/api/auth/login.php',
            {
                email,
                password
            });
        const data = response.data;
        return data;
    },
    signup:async (email, username, password)=>{
        const response = await axios.post('http://localhost/flavor-town/flavor-town-back/api/auth/signup.php',
            {
                email,
                username,
                password
            });
        const data = response.data;
        return data;
    }
}