import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.init';

export const authContext = createContext();

const auth = getAuth(app)

const AuthContext = ({ children }) => {

    //state for user
    const [user, setUser] = useState({})

    //state for loader
    const [loader, setLoader] = useState(true);

    //google signIn
    let handleGoogle = (provider) => {

        setLoader(true)
        return signInWithPopup(auth, provider)
    }

    //password signUp
    let handleSignUp = (email, password) => {

        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //password login
    let hanldeLogin = (email, password) => {

        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    //signout
    let handleSignOut = () => {

        setLoader(true)
        return signOut(auth)
    }

    //email varification
    let handleVarificationMail = () => {

        return sendEmailVerification(auth.currentUser)
    }

    //hold user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            console.log('user:', currentUser)
            setUser(currentUser);
            setLoader(false)

        })
        return () => {

            unsubscribe();
        }
    }, [])


    //set display name
    const displayUserName = (name, photoUrl) => {

        return updateProfile(auth.currentUser, {

            displayName: name, photoURL: photoUrl
        })

    }


    let authInfo = { handleGoogle, handleSignUp, hanldeLogin, handleSignOut, user, displayUserName, handleVarificationMail, loader }
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthContext;