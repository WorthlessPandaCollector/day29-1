
import dotenv from 'dotenv'

dotenv.config()


const firebaseConfig = {
    apikey: process.env.FIREBASE_CONFIG_APIKEY,
    authDomain: process.env.FIREBASE_CONFIG_AUTHDOMAIN,
    projectId: process.env.FIREBASE_CONFIG_PROJECTID,
    storageBucket: process.env.FIREBASE_CONFIG_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_CONFIG_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_CONFIG_APPID           
};

export { firebaseConfig }