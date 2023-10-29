import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.config.js";
import { createContext, useEffect, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const SignUP = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignOut = () => {
    return signOut(auth);
  };

  const authValue = { SignUP, user, SignOut, SignIn };
  return (
    <authContext.Provider value={authValue}>{children}</authContext.Provider>
  );
};
