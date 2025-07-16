import { useEffect, useState } from "react";
import UserInput from "../components/UserInput";
import { getUser } from "../data/getUser";

export default function Home() {
  const [name, setName] = useState("");
  const [apiUser, setApiUser] = useState("");

  useEffect(() => {
    document.title = name ? `${name}님 환영합니다!` : "React App";
  }, [name]);

  useEffect(() => {
    getUser().then((user) => setApiUser(user.name));
  }, []);

  return (
    <div className="p-4">
      <h1>홈 페이지</h1>
      <UserInput onNameChange={setName} />
      <p>입력된 이름: {name || "없음"}</p>
      <p>API에서 가져온 유저 이름: {apiUser}</p>
    </div>
  );
}
