import { useContext, useEffect } from "react";
import { UserContext } from "../context/user-context.jsx";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const [, , isUserLoggedIn] = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, []);

  return isUserLoggedIn ? children : "";
}
