// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
const firebaseInit = ()=>{
    return initializeApp(firebaseConfig);
}
export default firebaseInit;