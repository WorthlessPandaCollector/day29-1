import axios from "axios";
import type { User } from "../domain/user";



async function getSingleUser(user: User){
    const singleUser = await axios.get("http://localhost:3002/users/"+user.uuid)
    console.log(singleUser.data)
    return singleUser.data
}


export default getSingleUser