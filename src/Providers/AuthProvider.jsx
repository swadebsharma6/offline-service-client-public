import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // createUser
    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
  


    // observer
    useEffect(()=>{
        const unSubscribe  = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('Observer', currentUser);
            setLoading(false)
        });
        return ()=>{
            unSubscribe();
        }
    }, [])
    

    const authInfo ={
        user,
        loading,
        createUser,
        logInUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
   
}