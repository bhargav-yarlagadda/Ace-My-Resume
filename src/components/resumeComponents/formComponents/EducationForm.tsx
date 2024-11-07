import { useContext } from "react";
import { ResumeInfoContext } from "../../../../context/ResumeContext";
import { FaArrowLeft, FaArrowRight, FaPlus, FaTrash } from "react-icons/fa";

interface EducationInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const EducationInput: React.FC<EducationInputProps> = ({ label, type, name, value, onChange }) => (
  <div className="mb-2 rounded-sm">
    <label className="text-sm font-medium text-gray-600 mb-2">{label}</label>
    {type === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={3}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-800 resize-none"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-800"
      />
    )}
  </div>
);

const EducationForm = () => {
  const context = useContext(ResumeInfoContext);
  if (!context) return <div>Loading...</div>;

  const { resumeInfo, setResumeInfo, formSection, setFormSection } = context;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: number) => {
    const { name, value } = e.target;
    setResumeInfo((prev) => ({
      ...prev,
      education: prev.education.map((edu) => (edu.id === id ? { ...edu, [name]: value } : edu)),
    }));
  };

  const addNewEducation = () => {
    setResumeInfo((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: prev.education.length + 1,
          universityName: "",
          startDate: "",
          endDate: "",
          degree: "",
          major: "",
          description: "",
        },
      ],
    }));
  };

  const deleteEducation = (id: number) => {
    setResumeInfo((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
  };

  return (
    <div>
      {formSection === 2 && (
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
              onClick={(e) => {
                e.preventDefault();
                addNewEducation();
              }}
              className="flex items-center gap-2 w-full md:w-auto bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md shadow transition"
            >
              <FaPlus /> Add New Education
            </button>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 text-center mt-4 mb-6">Education</h2>

          {resumeInfo.education.map((education) => (
            <div key={education.id} className="relative mb-4 p-5   bg-white rounded-sm shadow-lg">
              <button
                onClick={() => deleteEducation(education.id)}
                className="absolute top-2 right-4 bg-gray-400 hover:bg-gray-500 text-white p-2 rounded-full transition"
                aria-label="Delete education"
              >
                <FaTrash />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 gap-y-0">
                <EducationInput
                  label="University Name"
                  type="text"
                  name="universityName"
                  value={education.universityName}
                  onChange={(e) => handleInputChange(e, education.id)}
                />
                <EducationInput
                  label="Start Date"
                  type="text"
                  name="startDate"
                  value={education.startDate}
                  onChange={(e) => handleInputChange(e, education.id)}
                />
                <EducationInput
                  label="End Date"
                  type="text"
                  name="endDate"
                  value={education.endDate}
                  onChange={(e) => handleInputChange(e, education.id)}
                />
                <EducationInput
                  label="Degree"
                  type="text"
                  name="degree"
                  value={education.degree}
                  onChange={(e) => handleInputChange(e, education.id)}
                />
                <EducationInput
                  label="Major"
                  type="text"
                  name="major"
                  value={education.major}
                  onChange={(e) => handleInputChange(e, education.id)}
                />
              </div>
              <EducationInput
                  label="Description"
                  type="textarea"
                  name="description"
                  value={education.description}
                  onChange={(e) => handleInputChange(e, education.id)}
                />
            </div>
          ))}
        </form>
      )}
    </div>
  );
};

export default EducationForm;
