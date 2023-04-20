import { createContext, useEffect, useState } from "react";
import { UserService } from "../service/user-service.js";
// value of the user at the initial app render
export const initialUserValue = null;
//used this, so we can persist the info of whether the user is authenticated or not on page refresh
export const isLoggedIn =
  JSON.parse(window.localStorage.getItem("isUserLoggedIn")) || false;
export const UserContext = createContext([initialUserValue, isLoggedIn]);

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(initialUserValue);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(isLoggedIn);

  useEffect(() => {
    async function getUser() {
      if (isUserLoggedIn) {
        const user = await UserService.getUser();
        setUser(user);
      }
    }

    getUser();
  }, []);
  return (
    <UserContext.Provider
      value={[user, setUser, isUserLoggedIn, setIsUserLoggedIn]}
    >
      {children}
    </UserContext.Provider>
  );
}
