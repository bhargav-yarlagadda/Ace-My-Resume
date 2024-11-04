import { SignIn, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserSignIn = () => {
  const { isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate("/");
    }
  }, [isLoaded, isSignedIn, navigate]);

  if (!isLoaded) {
    return null; // Optionally, display a loading spinner here
  }

  return (
    <div className="flex items-center justify-center py-8 bg-gray-900 text-white bg-opacity-90">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>
        <SignIn />
      </div>
    </div>
  );
};

export default UserSignIn;
