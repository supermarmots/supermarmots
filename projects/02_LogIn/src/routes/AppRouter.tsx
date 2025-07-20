import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Profile from "../pages/user/Profile";
import PrivateRoute from "./PrivateRoute";
import { useAuth } from "../context/AuthContext";

const AppRouter = () => {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        {/* 로그인하지 않은 사용자는 로그인 페이지로 리디렉션 */}
        <Route
          path="/"
          element={
            !user ? (
              <Navigate to="/auth/login" />
            ) : (
              <Navigate to="/user/profile" />
            )
          }
        />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />

        {/* PrivateRoute를 통해 인증된 사용자만 접근 가능 */}
        <Route element={<PrivateRoute />}>
          <Route path="/user/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
