import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashBoardScreen = () => {
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/auth/sign-in");
    }
  }, [isLoaded, isSignedIn, navigate]);

  return <div>Dashboard Content</div>;
};

export default DashBoardScreen;
