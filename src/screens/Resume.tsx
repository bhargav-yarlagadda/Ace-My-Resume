import { useUser } from "@clerk/clerk-react";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResumeForm from "../components/resumeComponents/ResumeForm";
import ResumePreview from "../components/resumeComponents/ResumePreview";
import { ResumeInfoContext } from "../../context/ResumeContext";
import Dummy from "../data/Dummy";

// Define the type of context properties based on Dummy
type ResumeInfoType = typeof Dummy;

// Define types for the context value
interface ResumeContextType {
  resumeInfo: ResumeInfoType;
  setResumeInfo: Dispatch<SetStateAction<ResumeInfoType>>;
  hasPersonalDetails: boolean;
  setHasPersonalDetails: Dispatch<SetStateAction<boolean>>;
  hasExperience: boolean;
  setHasExperience: Dispatch<SetStateAction<boolean>>;
  hasEducation: boolean;
  setHasEducation: Dispatch<SetStateAction<boolean>>;
  hasSkills: boolean;
  setHasSkills: Dispatch<SetStateAction<boolean>>;
  formSection:Number;
  setFormSection:Dispatch<SetStateAction<number>>;
}

export default function Resume() {
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useUser();
  const [resumeInfo, setResumeInfo] = useState<ResumeInfoType>(Dummy);
  const [hasPersonalDetails, setHasPersonalDetails] = useState<boolean>(true);
  const [hasExperience, setHasExperience] = useState<boolean>(true);
  const [hasEducation, setHasEducation] = useState<boolean>(true);
  const [hasSkills, setHasSkills] = useState<boolean>(true);
  const [formSection,setFormSection] = useState<number>(0)
  useEffect(() => {
    setResumeInfo(Dummy); // In real case, fetch or update resume data here
  }, []);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/auth/sign-in");
    }
  }, [isSignedIn, isLoaded, navigate]);

  const { resumeId } = useParams();
  console.log(resumeId);

  return (
    <ResumeInfoContext.Provider value={{
      resumeInfo,
      setResumeInfo,
      hasPersonalDetails,
      setHasPersonalDetails,
      hasExperience,
      setHasExperience,
      hasEducation,
      setHasEducation,
      hasSkills,
      setHasSkills,
      formSection,
      setFormSection
    } as ResumeContextType}>
      <div className="grid grid-cols-1 h-screen md:grid-cols-2 gap-3">
        <ResumeForm />
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
}
