import { SlButton } from "@shoelace-style/shoelace/dist/react";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import {
  initialUserValue,
  UserContext,
} from "../../core/context/user-context.jsx";
import { UserService } from "../../core/service/user-service.js";

export default function LoginPage() {
  const navigate = useNavigate();
  const [, setUser] = useContext(UserContext);
  const login = async () => {
    const isLoginSuccessful = await UserService.login();
    if (isLoginSuccessful) {
      const user = await UserService.getUser();
      setUser(user);
      UserService.setIsUserLoggedIn(isLoginSuccessful);
      navigate("/dashboard", { replace: true });
    }
  };

  useEffect(() => {
    setUser(initialUserValue);
    UserService.setIsUserLoggedIn(false);
  }, []);

  return (
    <div className="login-page">
      <form>
        <SlButton onClick={login}>Login</SlButton>
      </form>
    </div>
  );
}
