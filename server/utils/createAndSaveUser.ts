import { doc, getFirestore, setDoc } from "firebase/firestore";
import { User } from "../domain/user";
import { FirebaseApp } from "firebase/app";

async function createAndSaveUser(
    username: string,
    email: string,
    uuid: string,
    firebaseApp: FirebaseApp    
): Promise<User> {
    const user: User = {
        username: username,
        email: email,
        uuid: uuid
    };

    const database = getFirestore(firebaseApp);
    const collectionName = "users";
    const documentName = user.uuid.toString();
    await setDoc(doc(database, collectionName, documentName), user);
    return user;
}

export default createAndSaveUser

