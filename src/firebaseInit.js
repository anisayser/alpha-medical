// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfigs = {
    apiKey: "AIzaSyDHujOIfLD0yYV4PppIpJVySe4ubnuJ_PE",
    authDomain: "alpha-medical-fe5a6.firebaseapp.com",
    projectId: "alpha-medical-fe5a6",
    storageBucket: "alpha-medical-fe5a6.appspot.com",
    messagingSenderId: "345501678322",
    appId: "1:345501678322:web:c58bf4f7a4e1633c306e6b"
};


const app = initializeApp(firebaseConfigs);

const auth = getAuth(app)


export default auth;