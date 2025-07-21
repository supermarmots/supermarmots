import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";

interface UserProfile {
  name: string;
  email: string;
}

export const useUserData = () => {
  const { user } = useAuth(); // AuthContext에서 현재 사용자 정보를 가져옵니다.
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      const fetchUserProfile = async () => {
        setLoading(true);
        setError(null);
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserProfile(docSnap.data() as UserProfile);
          } else {
            setError("User data not found in Firestore.");
          }
        } catch (err) {
          setError("Failed to fetch user data.");
        } finally {
          setLoading(false);
        }
      };
      fetchUserProfile();
    } else {
      setLoading(false);
    }
  }, [user]);

  return { userProfile, loading, error };
};
