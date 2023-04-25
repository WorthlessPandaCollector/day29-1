import { FirebaseApp } from "firebase/app";
import { User } from "../domain/user";
import { collection, getDocs, getFirestore } from "firebase/firestore";



async function getAllUsers(firebaseApp: FirebaseApp): Promise<User[]> {
    const database = getFirestore(firebaseApp);
    const docRef = collection(database, "users");

    const allUsers = await getDocs(docRef);
    const users: User[] = [];

    allUsers.forEach(document => {
        users.push(document.data() as User)
    });

    return users;
}

export default getAllUsers;


