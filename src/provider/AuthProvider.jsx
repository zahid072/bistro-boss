import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUsers = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };
  // update profile
  const updateUserProfile = (name, photo) => {
    if (name && photo) {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    admin,
    signUpUser,
    signInUsers,
    updateUserProfile,
    signInWithGoogle,
    logOut,
    loader,
    setRefetch,
    refetch,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
