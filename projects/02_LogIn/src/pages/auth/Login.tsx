import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate, Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

class CustomError extends Error {
  response?: {
    data: unknown;
    status: number;
    headers: string;
  };
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/user/profile");
    } catch (error) {
      const customError = error as CustomError;
      setError(customError.message);
    }
  };

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Welcome back! Please login to your account.</p>
        </div>
        <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <Input
              label="Email"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="label">
              <Link
                to="/auth/signup"
                className="label-text-alt link link-hover"
              >
                Don't have an account? Sign up
              </Link>
            </label>
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            <div className="mt-6 form-control">
              <Button type="submit">Login</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
