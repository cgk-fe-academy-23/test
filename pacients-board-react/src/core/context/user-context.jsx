import { createContext, useEffect, useState } from "react";
import { UserService } from "../service/user-service.js";
// value of the user at the initial app render
export const initialUserValue = null;

export const UserContext = createContext([initialUserValue]);

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(initialUserValue);

  useEffect(() => {
    async function getUser() {
      if (UserService.isUserLoggedIn()) {
        const user = await UserService.getUser();
        setUser(user);
      }
    }

    getUser();
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
}
