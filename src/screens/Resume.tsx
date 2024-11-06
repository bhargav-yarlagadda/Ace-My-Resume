import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResumeForm from "../components/resumeComponents/ResumeForm";
import ResumePreview from "../components/resumeComponents/ResumePreview";
import { ResumeInfoContext } from '../../context/ResumeContext';
import Dummy from "../data/Dummy";

// Define the type of context properties based on Dummy
type ResumeInfoType = typeof Dummy;

export default function Resume() {
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useUser();
  const [resumeInfo, setResumeInfo] = useState<ResumeInfoType>(Dummy);

  useEffect(() => {
    setResumeInfo(Dummy); // In real case, fetch or update resume data here
  }, []);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate('/auth/sign-in');
    }
  }, [isSignedIn, isLoaded]);

  const { resumeId } = useParams();
  console.log(resumeId);

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 h-screen md:grid-cols-2  gap-5">
        <ResumeForm />
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
}
