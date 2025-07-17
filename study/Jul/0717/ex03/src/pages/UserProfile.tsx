import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
export default function UserProfile() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserProfile must be used within a UserProvider");
  }

  const { user, setUser } = context;

  return (
    <div>
      <h2>사용자 정보</h2>
      <p>이름: {user.name}</p>
      <p>나이: {user.age}</p>
      <button onClick={() => setUser({ name: "김철수", age: 25 })}>
        정보변경
      </button>
    </div>
  );
}
