import { useContext } from "react";
import { ResumeInfoContext } from "../../../../context/ResumeContext";
import { FaArrowLeft, FaArrowRight, FaPlus, FaTrash } from "react-icons/fa";

interface ExperienceInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
}

const ExperienceInput: React.FC<ExperienceInputProps> = ({ label, type, name, value, onChange, disabled = false }) => (
  <div className="mb-4">
    <label className="text-sm font-medium text-gray-600 mb-1">{label}</label>
    {type === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={3}
        style={{scrollbarWidth:'none'}}
        disabled={disabled}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-800 resize-none"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-800"
      />
    )}
  </div>
);

const ExperienceForm = () => {
  const context = useContext(ResumeInfoContext);
  if (!context) return <div>Loading...</div>;

  const { resumeInfo, setResumeInfo, formSection, setFormSection } = context;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: number) => {
    const { name, value } = e.target;
    setResumeInfo((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) => (exp.id === id ? { ...exp, [name]: value } : exp)),
    }));
  };

  const handleToggleCurrentlyWorking = (id: number) => {
    setResumeInfo((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, currentlyWorking: !exp.currentlyWorking, endDate: !exp.currentlyWorking ? "" : exp.endDate } : exp
      ),
    }));
  };

  const addNewExperience = () => {
    setResumeInfo((prev: any) => ({
      ...prev,
      experience: [
        ...prev.experience,
        { id: prev.experience.length + 1, title: "", companyName: "", city: "", state: "", startDate: "", endDate: "", currentlyWorking: false, workSummery: "" },
      ],
    }));
  };

  const deleteExperience = (id: number) => {
    setResumeInfo((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  };

  return (
    <div>
      {formSection === 1 && (
        <form
          style={{ scrollbarWidth: "none" }}
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
              onClick={(e)=>{
                e.preventDefault()
                addNewExperience()
              }}
              className="flex items-center gap-2 w-full md:w-auto bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md shadow transition"
            >
              <FaPlus /> Add New Experience
            </button>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 text-center mt-4 mb-6">Experience</h2>

          {resumeInfo.experience.map((experience) => (
            <div key={experience.id} className="relative mb-4 p-6 bg-white rounded-sm">
              <button
                onClick={() => deleteExperience(experience.id)}
                className="absolute top-2 right-4 bg-gray-400 hover:bg-gray-500 text-white p-2 rounded-full transition"
                aria-label="Delete experience"
              >
                <FaTrash />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ExperienceInput label="Job Title" type="text" name="title" value={experience.title} onChange={(e) => handleInputChange(e, experience.id)} />
                <ExperienceInput label="Company Name" type="text" name="companyName" value={experience.companyName} onChange={(e) => handleInputChange(e, experience.id)} />
                <ExperienceInput label="City" type="text" name="city" value={experience.city} onChange={(e) => handleInputChange(e, experience.id)} />
                <ExperienceInput label="State" type="text" name="state" value={experience.state} onChange={(e) => handleInputChange(e, experience.id)} />
                <ExperienceInput label="Start Date" type="text" name="startDate" value={experience.startDate} onChange={(e) => handleInputChange(e, experience.id)} />
                <ExperienceInput
                  label="End Date"
                  type="text"
                  name="endDate"
                  value={experience.endDate}
                  onChange={(e) => handleInputChange(e, experience.id)}
                  disabled={experience.currentlyWorking}
                />
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={experience.currentlyWorking}
                    onChange={() => handleToggleCurrentlyWorking(experience.id)}
                    className="mr-2"
                  />
                  <label className="text-sm font-medium text-gray-600">Currently Working Here</label>
                </div>
              </div>
              <ExperienceInput
                label="Work Summary"
                type="textarea"
                name="workSummery"
                value={experience.workSummery}
                onChange={(e) => handleInputChange(e, experience.id)}
              />
            </div>
          ))}
        </form>
      )}
    </div>
  );
};

export default ExperienceForm;
