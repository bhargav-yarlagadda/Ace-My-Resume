import { useContext } from "react";
import { ResumeInfoContext } from "../../../../context/ResumeContext";
import { FaUser, FaBriefcase, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const PersonalDetailsPreview = () => {
  const context = useContext(ResumeInfoContext);

  // Check if context is null
  if (!context) {
    return <div>Loading...</div>; // Handle the null case here
  }

  const { resumeInfo,hasPersonalDetails } = context;

  return (
    <div>
      {
        hasPersonalDetails && (
          <div className="max-w-4xl mx-auto bg-white p-3 ">
          {/* Personal Details Header */}
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Personal Details</h2>
    
          {/* Personal Details Grid */}
          <div className="space-y-4">
            {/* Name, Job Title, and Email in a single line */}
            <div className="flex justify-between w-full items-center">
              <div className="flex items-center">
                <FaUser className="text-gray-800 mr-2" />
                <p className="text-base text-gray-800">{resumeInfo?.firstName} {resumeInfo?.lastName}</p>
              </div>
              <div className="flex items-center">
                <FaBriefcase className="text-gray-800 mr-2" />
                <p className="text-base text-gray-800">{resumeInfo?.jobTitle}</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-gray-800 mr-2" />
                <p className="text-base text-gray-800">{resumeInfo?.email}</p>
              </div>
            </div>
    
            {/* Phone and Address in the next line */}
            <div className="flex justify-between w-full items-center">
              <div className="flex items-center">
                <FaPhoneAlt className="text-gray-800 mr-2" />
                <p className="text-base text-gray-800">{resumeInfo?.phone}</p>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-gray-800 mr-2" />
                <p className="text-base text-gray-800">{resumeInfo?.address}</p>
              </div>
            </div>
    
            {/* Summary */}
            <div className="w-full flex flex-col items-center">
              <span className="text-xl font-semibold text-gray-800 mb-4">Summary</span>
              <p className="text-base text-gray-800">{resumeInfo?.summery}</p>
            </div>
          </div>
        </div>
        )
      }
    </div>
  );
};

export default PersonalDetailsPreview;
