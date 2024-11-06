import { useContext } from "react";
import { ResumeInfoContext } from "../../../context/ResumeContext";

// Experience Component to display individual experience details
const Experience = ({
  title,
  companyName,
  city,
  state,
  startDate,
  endDate,
  currentlyWorking,
  workSummery
}: any) => {
  return (
    <div className="bg-white mb-4">
      <h3 className="text-lg font-semibold text-gray-800">{title ?? "N/A"}</h3>
    <div className="flex justify-between">
    <p className="text-base text-gray-800">
        {companyName ?? "N/A"} - {city ?? "N/A"}, {state ?? "N/A"}
      </p>
      <p className="text-sm text-gray-500">
        {startDate ?? "N/A"} - {currentlyWorking ? "Present" : endDate ?? "N/A"}
      </p>
    </div>
      <div className="mt-2 text-gray-700">
        <p>{workSummery ?? "No work summary provided."}</p>
      </div>
    </div>
  );
};

// ProfessionalExperiencePreview Component to display all experience data
const ProfessionalExperiencePreview = () => {
  const context = useContext(ResumeInfoContext);
  if (!context) {
    return <div>Loading...</div>; // Handle the null case here
  }

  const { resumeInfo } = context;

  return (
    <div className="max-w-4xl mx-auto bg-white p-2">
      <h2 className="text-xl font-semibold text-center text-gray-800">Professional Experience</h2>

      {/* Iterate over the experience array and render each Experience */}
      <div>
        {resumeInfo.experience?.map((item) => (
          <Experience
            key={item.id}
            title={item.title}
            companyName={item.companyName}
            city={item.city}
            state={item.state}
            startDate={item.startDate}
            endDate={item.endDate}
            currentlyWorking={item.currentlyWorking}
            workSummery={item.workSummery}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalExperiencePreview;
