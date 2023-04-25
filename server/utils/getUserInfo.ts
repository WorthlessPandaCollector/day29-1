import { FirebaseApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { User } from "../domain/user";



async function getUserInfo(firebaseApp: FirebaseApp, uuid:string){
    const database = getFirestore(firebaseApp)
    const docRef = doc(database, "users", uuid)
    
    const userData = await getDoc(docRef);

        if (userData.exists()) {
            let user = userData.data();
            console.log(user.uuid)
            
            return user;
        } else {
        console.log("No such document!");
        }

        




}

export default getUserInfo