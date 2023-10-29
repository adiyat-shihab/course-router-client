import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config.js";
import { createContext } from "react";
export const authContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const SignUP = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authValue = { SignUP };
  return (
    <authContext.Provider value={authValue}>{children}</authContext.Provider>
  );
};
