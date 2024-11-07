import { useContext } from "react";
import { ResumeInfoContext } from "../../../../context/ResumeContext";

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, type, name, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
    {type === "textarea" ? (
      <textarea
      style={{scrollbarWidth:'none'}}
        name={name}
        value={value}
        onChange={onChange}
        rows={3}
        className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 text-gray-800 resize-none"
      ></textarea>
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 text-gray-800"
      />
    )}
  </div>
);

const PersonalDetailForm = () => {
  const context = useContext(ResumeInfoContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { resumeInfo, setResumeInfo, hasPersonalDetails, setHasPersonalDetails } = context;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setResumeInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fields = [
    { label: "First Name", type: "text", name: "firstName" },
    { label: "Last Name", type: "text", name: "lastName" },
    { label: "Job Title", type: "text", name: "jobTitle" },
    { label: "Address", type: "text", name: "address" },
    { label: "Phone", type: "text", name: "phone" },
    { label: "Email", type: "email", name: "email" },
    { label: "Summary", type: "textarea", name: "summery" },
  ];

  return (
    <form className="space-y-2 bg-white px-6 h-full border-2 border-gray-200  mx-auto">
        <div className="flex text-[14px] mt-3 gap-4 justify-center">
        <button
          type="submit"
          className="w-full md:w-auto bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 transition duration-200"
        >
          Save Details
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setHasPersonalDetails(!hasPersonalDetails);
          }}
          className={` ${hasPersonalDetails ? 'bg-red-600' : 'bg-blue-600'} w-full md:w-auto text-white py-2 px-4 rounded-lg shadow transition duration-200`}
        >
          {hasPersonalDetails ? "Remove Section" : "Keep This Section"}
        </button>
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Personal Details</h2>
      {fields.map((field) => (
        <Input
          key={field.name}
          label={field.label}
          type={field.type}
          name={field.name}
          value={typeof resumeInfo[field.name as keyof typeof resumeInfo] === "string" 
                    ? (resumeInfo[field.name as keyof typeof resumeInfo] as string) 
                    : ""}
          onChange={handleInputChange}
        />
      ))}

    </form>
  );
};

export default PersonalDetailForm;
