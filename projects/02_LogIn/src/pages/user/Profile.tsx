import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { db, auth } from "../../firebase/firebase";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

interface UserProfile {
  name: string;
  email: string;
}

const Profile = () => {
  const { user } = useAuth();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserProfile(docSnap.data() as UserProfile);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserProfile();
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/auth/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-lg"></span>
      </div>
    );
  }

  if (!userProfile) {
    return <div>User profile not found.</div>;
  }

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
