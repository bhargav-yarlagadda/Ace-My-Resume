import { useContext } from "react";
import { ResumeInfoContext } from "../../../../context/ResumeContext";
import { FaArrowLeft, FaArrowRight, FaPlus, FaTrash } from "react-icons/fa";

interface SkillInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SkillInput: React.FC<SkillInputProps> = ({ label, name, value, onChange }) => (
  <div className="mb-4">
    <label className="text-sm font-medium text-gray-600 mb-2">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-800"
    />
  </div>
);

const RatingInput: React.FC<SkillInputProps> = ({ label, name, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = Math.min(Math.max(Number(e.target.value), 0), 100); // Ensure value stays between 0 and 100
    const customEvent = {
      ...e,
      target: { ...e.target, value: newValue.toString() }, // Modify the event target value
    };
    onChange(customEvent as React.ChangeEvent<HTMLInputElement>); // Cast the event to match the expected type
  };

  return (
    <div className="mb-4">
      <label className="text-sm font-medium text-gray-600 mb-2">{label}</label>
      <input
        type="number"
        name={name}
        value={value}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-800"
        min="0"
        max="100"
      />
    </div>
  );
};

const SkillForm = () => {
  const context = useContext(ResumeInfoContext);
  if (!context) return <div>Loading...</div>;

  const { resumeInfo, setResumeInfo, formSection, setFormSection } = context;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const { name, value } = e.target;
    setResumeInfo((prev) => ({
      ...prev,
      skills: prev.skills.map((skill) =>
        skill.id === id ? { ...skill, [name]: value } : skill
      ),
    }));
  };

  const addNewSkill = () => {
    setResumeInfo((prev) => ({
      ...prev,
      skills: [
        ...prev.skills,
        {
          id: prev.skills.length + 1, // Unique ID based on length
          name: "",
          rating: 0,
        },
      ],
    }));
  };

  const deleteSkill = (id: number) => {
    setResumeInfo((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill.id !== id),
    }));
  };

  return (
    <div>
      {formSection === 3 && (
        <form
        style={{scrollbarWidth:'none'}}
          className="space-y-4 bg-gray-100 p-6 h-screen border border-gray-300 rounded-lg mx-auto overflow-y-scroll scrollbar-hide"
        >
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setFormSection((prev) => prev - 1)}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition"
            >
              <FaArrowLeft /> Previous
            </button>
            <button
              onClick={() => setFormSection((prev) => prev + 1)}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition"
            >
              Next <FaArrowRight />
            </button>
          </div>

          <div className="flex justify-end">
            <button
              onClick={(e) => {
                e.preventDefault();
                addNewSkill();
              }}
              className="flex items-center gap-2 w-full md:w-auto bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md shadow transition"
            >
              <FaPlus /> Add New Skill
            </button>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 text-center mt-4 mb-6">Skills</h2>

          {resumeInfo.skills.map((skill) => (
            <div key={skill.id} className="relative mb-4 p-6 bg-white rounded-sm shadow-lg">
              <button
                onClick={() => deleteSkill(skill.id)}
                className="absolute top-2 right-4 bg-gray-400 hover:bg-gray-500 text-white p-2 rounded-full transition"
                aria-label="Delete skill"
              >
                <FaTrash />
              </button>
              <SkillInput
                label="Skill Name"
                name="name"
                value={skill.name}
                onChange={(e) => handleInputChange(e, skill.id)}
              />
              <RatingInput
                label="Rating"
                name="rating"
                value={String(skill.rating)}
                onChange={(e) => handleInputChange(e, skill.id)}
              />
            </div>
          ))}
        </form>
      )}
    </div>
  );
};

export default SkillForm;
