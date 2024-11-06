import { useContext } from "react";
import { ResumeInfoContext } from "../../../../context/ResumeContext";

// Skill Component to display individual skill details
const Skill = ({ name, rating }: { name: string; rating: number }) => {
  return (
    <div className="bg-white w-[150px]">
      <h3 className="text-base font-semibold text-gray-800">{name}</h3>
      <div className="w-full bg-gray-300 h-2 mt-2">
        <div
          className="bg-blue-500 h-full"
          style={{ width: `${rating}%` }}
        />
      </div>
    </div>
  );
};

// SkillsPreview Component to display all skills in a grid layout
const SkillsPreview = () => {
  const context = useContext(ResumeInfoContext);

  // Check if context is null
  if (!context) {
    return <div>Loading...</div>; // Handle the null case here
  }

  const { resumeInfo } = context;

  return (
    <div className="max-w-4xl mx-auto bg-white p-3">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Skills</h2>

      {/* Grid layout for skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resumeInfo.skills?.map((skill) => (
          <Skill key={skill.id} name={skill.name} rating={skill.rating} />
        ))}
      </div>
    </div>
  );
};

export default SkillsPreview;
