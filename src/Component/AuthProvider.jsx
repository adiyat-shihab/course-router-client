import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.config.js";
import { createContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await setUser(user.email);
      }
    });
  }, []);

  const { isPending, isError, data, error, status } = useQuery({
    queryKey: ["email"],
    queryFn: () => axios.get(`http://localhost:3000/user/${user}`),
  });

  if (isError) {
    return console.log(isError);
  } else if (error) {
    return console.log(error);
  }

  const SignUP = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignOut = () => {
    return signOut(auth);
  };

  const authValue = { SignUP, user, SignOut, SignIn, data };
  return (
    <authContext.Provider value={authValue}>{children}</authContext.Provider>
  );
};
