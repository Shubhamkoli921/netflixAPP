import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { addDoc, collection } from 'firebase/firestore'

const AuthContext = createContext()
export function AuthContextProvider({ children }) {

    const [user, setUser] = useState({})

    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
        try{
            const docRef = addDoc(collection(db,'users',{
                email:email
            }))
            console.log("written data in ", docRef.id)
        }
        catch(err){
            console.log(err)
        }
        // setDoc(doc(db,'users',email),{
        //     savedShows:[]
        // })

    }
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
        });
        return (() => {
            unsubscribe();
        });
    })

    return (
        <AuthContext.Provider value={{ signUp, login, logOut, user }}>
            {children}
        </AuthContext.Provider>
    )
}
export function UserAuth() {
    return useContext(AuthContext)
}