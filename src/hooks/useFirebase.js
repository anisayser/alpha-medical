import React, { useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import firebaseInit from '../firebase/firebaseInit';
import { useNavigate } from 'react-router-dom';

firebaseInit();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [verify, setVerify] = useState('');
    const [error, setError] = useState('');
    const [passwordReseted, setPasswordReset] = useState();

    const googleProvider  = new GoogleAuthProvider();
    const auth = getAuth();

    const navigate = useNavigate();

    const updateUserProfile = (name)=>{
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(()=>{

        })
    }

    const verifyEmail = ()=>{
        sendEmailVerification(auth.currentUser)
        .then(()=>{
            setVerify('Verification Mail sent to your Emal Address. Please Verify Your Email & Login');
        })
    }

    const signUpWithEmail = (name,email, password)=>{
        if (password.length < 6) {
            return setError('Password Must have to be at least 6 characters');
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            return setError('Password Must have two uppercase Letter');
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(credentials=>{
            setUser(credentials.user);
            updateUserProfile(name);
            verifyEmail();
            setError('');
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    const signInWithEmail = (from, email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            navigate(from, {
                replace: true
            })
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    const resetPassword = (email)=>{
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            setPasswordReset('Password Reset link sent to your email.');
        })
    }

    const signInWithGoogle =()=>{
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if (user) {
                setUser(user);
            }
        })
    },[])

    const logOut = ()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    return {
        user,
        verify,
        error,
        passwordReseted,
        signUpWithEmail,
        signInWithEmail,
        signInWithGoogle,
        updateUserProfile,
        resetPassword,
        logOut,
    }

};

export default useFirebase;