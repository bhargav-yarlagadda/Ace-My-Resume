import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddResume from "../components/dashboardComponents.tsx/AddResume";
import { getAllResumeIds } from "../../service/GlobalApi";

import { IoDocumentText } from "react-icons/io5"; // Make sure to import the icon

const Preview = ({ resumeId, title }: { resumeId: string; title: string }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/dashboard/resume/${resumeId}/edit`);
      }}
      className="w-[160px] h-[220px] flex flex-col items-center justify-center text-center relative rounded-xl bg-black/10 hover:bg-slate-50 hover:text-black shadow-lg hover:shadow-2xl text-white hover:scale-105 transition-all duration-300 ease-out border border-[#3E4E4F] hover:border-blue-500 cursor-pointer"
    >
      {/* Icon */}
      <IoDocumentText className="absolute -top-6 w-12 h-12 text-[#4A90E2] bg-[#2D2E2F]  rounded-full p-2 shadow-md" />

      {/* Title */}
      <div className="flex flex-col items-center justify-center gap-4 mt-8">
        <span className="font-semibold text-lg tracking-wide ">{title}</span>
        
        {/* Description */}
        <p className="text-sm  mt-1 px-4  leading-snug">
          Edit and customize your resume to help you stand out for your next job opportunity.
        </p>
      </div>
    </div>
  );
};



const DashBoardScreen = () => {
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useUser();
  const [resumes, setResumes] = useState<{ resumeId: string; title: string }[]>([]);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/auth/sign-in");
    }
  }, [isLoaded, isSignedIn, navigate]);

  const getResumes = async () => {
    const allResumes = await getAllResumeIds();
    if (allResumes) {
      setResumes(allResumes);
    }
  };

  useEffect(() => {
    getResumes();
  }, []);

  return (
    <div className="p-4">
      <div className="text-white mt-4 mb-8">
        <h2 className="font-semibold text-3xl text-center">My Resumes</h2>
        <span className="block text-center">
          Start creating your resume to land your next job
        </span>
      </div>
      <div className="flex just flex-wrap justify-center gap-8">
      <AddResume getResumes={getResumes} />

        {resumes.length > 0 ? (
          resumes.map((resume, index) => (
            <Preview key={index} resumeId={resume.resumeId} title={resume.title} />
          ))
        ) : (
          <div  className="flex flex-col justify-center">
          <p className="text-center text-gray-400 ">You Havent created any Resumes!!!</p>
          <p className="text-center text-gray-400 " >Start Building Your Resume Today</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoardScreen;
