import { FirebaseApp } from "firebase/app";
import { deleteDoc, doc, getDoc, getFirestore } from "firebase/firestore";




async function deleteUser(firebaseApp: FirebaseApp, uuid: string) {
    const database = getFirestore(firebaseApp);
    const docRef = doc(database, "users", uuid)

    const userData = await getDoc(docRef)

    if(userData.exists()) {
        const result = await deleteDoc(doc(database, "users", uuid))
        return result;
    } else {
        console.log("No user available...")
    }
}

export default deleteUser