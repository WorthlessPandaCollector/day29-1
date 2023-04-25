import axios from "axios";



async function getUserList(){
    const users = await axios.get("http://localhost:3002/users")
    return users.data
}

export default getUserList