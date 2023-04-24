import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./authentication/login/Login.jsx";
import DashboardPage from "./dashboard/DashboardPage.jsx";
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
import { UserContextProvider } from "./core/context/user-context.jsx";
import { Interceptor } from "./core/http/interceptor.js";
import { ProtectedRoute } from "./core/utils/protected-route.jsx";

setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/"
);
function App() {
  return (
    <UserContextProvider>
      <Interceptor>
        <div className="App">
          <div className="page-content">
            <Routes>
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="/login" element={<LoginPage />}></Route>
            </Routes>
          </div>
          <div className="footer"></div>
        </div>
      </Interceptor>
    </UserContextProvider>
  );
}
export default App;
