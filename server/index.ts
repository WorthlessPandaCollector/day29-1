import express from "express";
import { FirebaseApp, initializeApp } from "firebase/app"
import { v4 as uuidv4 } from "uuid"
import { firebaseConfig } from "./domain/firebase";
import createAndSaveUser from "./utils/createAndSaveUser";
import cors from "cors"
import getAllUsers from "./utils/getAllUsers";
import updateUserInfo from "./utils/updateUserInfo";
import getUserInfo from "./utils/getUserInfo";
import deleteUser from "./utils/deleteUser";

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig)

const app = express();

app.use(express.json())

app.use(cors())

app.get("/users", async function(req,res){
    const users = await getAllUsers(firebaseApp)
    res.send(users);
})

app.post("/adduser", async function(req,res){
    const username: string = req.body.username;
    const email: string = req.body.email;
    const uuid = uuidv4();
    const user = await createAndSaveUser(username, email, uuid, firebaseApp)
    res.send(user)
})

app.put("/users/:id", async function (req,res){
    const uuid: string = req.params.id
    const usernameEdit: string = req.body.username;
    const emailEdit: string = req.body.email
    console.log(uuid, " has submitted following edits: ", usernameEdit, " ", emailEdit)
    const edits = await updateUserInfo(firebaseApp,usernameEdit, emailEdit, uuid)

})

app.get("/users/:id", async function (req,res){
    const uuid: string = req.params.id
    const userData = await getUserInfo(firebaseApp, uuid)
    res.send(userData)
})


app.delete("/deleteuser/:id", async function(req,res){
    const uuid: string = req.params.id
    await deleteUser(firebaseApp, uuid)

})


app.listen("3002")