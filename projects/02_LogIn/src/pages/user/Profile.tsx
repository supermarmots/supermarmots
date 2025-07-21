import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../hooks/useUserData"; // 커스텀 훅 import

const Profile = () => {
  // 커스텀 훅을 호출하여 사용자 정보, 로딩 상태, 에러를 한번에 받아옵니다.
  const { userProfile, loading, error } = useUserData();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/auth/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // 로딩 중일 때 UI
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // 에러 발생 시 UI
  if (error) {
    return <div>Error: {error}</div>;
  }

  // 사용자 프로필이 없을 때 UI
  if (!userProfile) {
    return <div>User profile not found. Please try logging in again.</div>;
  }

  // 성공적으로 데이터를 가져왔을 때 UI
  return (
    <div className="container p-4 mx-auto mt-10">
      <div className="mx-auto shadow-xl card w-96 bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl card-title">User Profile</h2>
          <p>
            <strong>Name:</strong> {userProfile.name}
          </p>
          <p>
            <strong>Email:</strong> {userProfile.email}
          </p>
          <div className="justify-end mt-4 card-actions">
            <button className="btn btn-primary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
