import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import React, { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { auth } from "./firebase/firebase";

function App() {
  const userInfo = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isCreate, setIsCreate] = useState(false);

  // 사용자명 입력추가 메서드
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPwd(e.target.value);
  };

  const handleClickCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsCreate((pre) => !pre);
  };

  const handleSubit = (e: React.FormEvent) => {
    e.preventDefault();

    // 회원 가입일때
    if (isCreate) {
      createUserWithEmailAndPassword(auth, email, pwd)
        .then(() => {
          alert("회원가입 성공");
        })
        .catch((e) => {
          alert(e);
        });
    } else {
      signInWithEmailAndPassword(auth, email, pwd)
        .then(() => {
          alert("로그인 성공");
        })
        .catch((e) => {
          alert(e);
        });
    }
  };

  // 로그아웃 기능
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="App">
      {userInfo ? (
        <div>
          로그인 상태입니다
          <button onClick={handleLogout}> 로그아웃 </button>
        </div>
      ) : (
        <form onSubmit={handleSubit}>
          {/* 사용자명 입력칸 추가*/}
          <input
            type="text"
            name="name"
            onChange={handleName}
            value={name}
            placeholder="이름"
          />
          <input
            type="email"
            name="email"
            onChange={handleEmail}
            value={email}
            placeholder="이메일"
          />
          <input
            type="password"
            name="pwd"
            onChange={handlePwd}
            value={pwd}
            placeholder="비밀번호"
          />
          <button type="submit"> {isCreate ? "만들기" : "로그인"}</button>
          <button type="button" onClick={handleClickCreate}>
            {isCreate ? "취소" : "회원가입"}
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
