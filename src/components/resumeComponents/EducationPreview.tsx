import { useContext } from "react";
import { ResumeInfoContext } from "../../../context/ResumeContext";

// Education Component to display individual education details
const Education = ({
  degree,
  major,
  universityName,
  startDate,
  endDate,
  description
}: any) => {
  return (
    <div className="mb-4 bg-white">
      <span className="text-lg font-semibold text-gray-800">
        {degree ?? "N/A"} in {major ?? "N/A"}
      </span>
     <div className="flex justify-between" >
     <p className="text-base text-gray-600">{universityName ?? "N/A"}</p>
      <p className="text-sm text-gray-500">
        {startDate ?? "N/A"} - {endDate ?? "N/A"}
      </p>
     </div>
      <div className=" text-gray-700">
        <p>{description ?? "No description provided."}</p>
      </div>
    </div>
  );
};

// EducationPreview Component to display all education data
const EducationPreview = () => {
  const context = useContext(ResumeInfoContext);

  // Check if context is null   
  if (!context) {
    return <div>Loading...</div>; // Handle the null case here
  }

  const { resumeInfo } = context;

  return (
    <div className="max-w-4xl mx-auto bg-white p-2">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">Education</h2>

      {/* Iterate over the education array and render each Education */}
      <div>
        {resumeInfo.education?.map((item) => (
          <Education
            key={item.id}
            degree={item.degree}
            major={item.major}
            universityName={item.universityName}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationPreview;
