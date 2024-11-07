import { createContext } from "react";
import { Dispatch, SetStateAction } from "react";

// Define the types for ResumeInfo
interface Experience {
  id: number;
  title: string;
  companyName: string;
  city: string;
  state: string;
  startDate: string;
  endDate: string;
  currentlyWorking: boolean;
  workSummery: string;
}

interface Education {
  id: number;
  universityName: string;
  startDate: string;
  endDate: string;
  degree: string;
  major: string;
  description: string;
}

interface Skill {
  id: number;
  name: string;
  rating: number;
}

interface ResumeInfoType {
  firstName: string;
  lastName: string;
  jobTitle: string;
  address: string;
  phone: string;
  email: string;
  themeColor: string;
  summery: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
}

// Define context type
export interface ResumeInfoContextType {
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
}

// Initialize context with the default value
export const ResumeInfoContext = createContext<ResumeInfoContextType | null>(null);
