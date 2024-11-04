import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddResume from "../components/dashboardComponents.tsx/AddResume";
const DashBoardScreen = () => {
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/auth/sign-in");
    }
  }, [isLoaded, isSignedIn, navigate]);

  return (
    <div className="" >
      <div className="text-white">
      <h2 className="font-semibold text-3xl text-center" >My resumes</h2>
      <span className="block text-center" >Starting Creating your resume to land into your next job</span>
      </div>
      <div className="flex flex-wrap">
        <AddResume/>
      </div>
    </div>
  )
};

export default DashBoardScreen;
