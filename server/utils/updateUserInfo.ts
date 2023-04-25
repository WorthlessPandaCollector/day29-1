import { FirebaseApp } from "firebase/app";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";



async function updateUserInfo(firebaseApp: FirebaseApp, usernameEdit: string, emailEdit:string, uuid: string) {
    const database = getFirestore(firebaseApp)
    const documentName = uuid;
    const docRef = doc(database, "users", documentName)
    const task = await getDoc(docRef)
    if(task.exists()){
        // const taskObject = task.data();
        // console.log(!taskObject.complete)
        // const complete = taskObject.complete
        const taskObject = task.data();
        const username = usernameEdit
        const email = emailEdit
        try {
            await updateDoc(docRef, {
                username: username,
                email: email
            });
        } catch(error) {
            console.error(error);
        } 
    } else {
        console.log("No task found.")
    }

}






export default updateUserInfo