import { useContext } from "react";
import { UserContext } from "../core/context/user-context.jsx";
import { SlButton } from "@shoelace-style/shoelace/dist/react";
import { useNavigate } from "react-router-dom";
import { UserService } from "../core/service/user-service.js";

export default function DashboardPage() {
  const [user] = useContext(UserContext);
  const navigate = useNavigate();
  const logout = async () => {
    navigate("/login");
  };

  const createPost = async () => {
    UserService.createPost();
  };

  const get404 = async () => {
    UserService.get404();
  };

  return (
    <div>
      Dashboard page
      <h1>Hello, {user?.name}!</h1>
      <form>
        <SlButton onClick={logout}>Logout</SlButton>
        <SlButton onClick={createPost}>createPost</SlButton>
        <SlButton onClick={get404}>Get404</SlButton>
      </form>
    </div>
  );
}
