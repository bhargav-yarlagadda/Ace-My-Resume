import { createContext } from "react";
import Dummy from "../src/data/Dummy";
// Define the type for the resumeInfo context value
type ResumeInfoType = {
  resumeInfo: typeof Dummy;
  setResumeInfo: React.Dispatch<React.SetStateAction<typeof Dummy>>;
};

// Initialize context with a default value of null
export const ResumeInfoContext = createContext<ResumeInfoType | null>(null);
