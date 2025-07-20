import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

// error any 타입 사용 지양을 위한 대체
class CustomError extends Error {
  response?: {
    data: unknown;
    status: number;
    headers: string;
  };
}

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Firestore에 사용자 정보 저장
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        name: name,
      });

      navigate("/user/profile"); // 회원가입 성공 시 프로필 페이지로 이동
    } catch (error) {
      const customError = error as CustomError;
      setError(customError.message);
    }
  };

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
        </div>
        <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
          <form className="card-body" onSubmit={handleSignup}>
            {/* 이름 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-borded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            {/* 이메일 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-borded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* 비밀번호 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-borded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="mt-6 form-contorl">
              <button className="btn btn-primary">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
