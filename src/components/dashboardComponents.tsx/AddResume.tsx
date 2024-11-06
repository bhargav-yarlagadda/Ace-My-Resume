import React, { useState, SetStateAction } from "react";
import { IoAdd, IoCloseOutline } from "react-icons/io5";
import { createNewResume } from '../../../service/GlobalApi';
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

interface CreateResumeModalProps {
  callback: React.Dispatch<SetStateAction<boolean>>;
  getResumes: () => void;
}

const CreateResumeModal: React.FC<CreateResumeModalProps> = ({ callback, getResumes }) => {
  const [resumeTitle, setResumeTitle] = useState<string>('');
  const { user } = useUser();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onHandleSubmit = async () => {
    setLoading(true);
    const Id = uuidv4();

    // Prepare data for submission
    const data = {
      title: resumeTitle,
      resumeId: Id,
      userEmail: user?.primaryEmailAddress?.emailAddress || '', // Fallback to empty string if undefined
      userName: user?.fullName || 'Anonymous' // Fallback to 'Anonymous' if undefined
    };

    try {
      const resp = await createNewResume(data);
      if (resp) {
        // Handle success (e.g., show a success message, redirect, etc.)
        console.log('Resume created successfully:', resp);
      }
    } catch (error) {
      console.error('Error creating resume:', error);
      // Handle the error (e.g., show an error message to the user)
    } finally {
      callback(false);
      setResumeTitle('');
      setLoading(false); // Ensure loading state is reset
      navigate(`/dashboard/resume/${Id}/edit`);
      getResumes();
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center transition-all ease-in divide-fuchsia-600 fixed inset-0 z-50 backdrop-blur-sm bg-black/60">
      {
        !loading ? (
          <div className="w-[90%] max-w-md p-6 bg-neutral-800 text-white rounded-lg shadow-lg relative">
            <button className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
              <IoCloseOutline onClick={() => { callback(false); }} className="text-2xl" />
            </button>
            <h2 className="text-2xl font-semibold mb-6 text-center">Name Your Document</h2>
            <div className="w-full">
              <label htmlFor="doc-name" className="block text-sm text-gray-300 mb-1">
                Document Name
              </label>
              <input
                type="text"
                id="doc-name"
                placeholder="John Doe's Resume"
                value={resumeTitle}
                onChange={(e) => { setResumeTitle(e.target.value); }}
                className="w-full px-4 py-2 rounded-md bg-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <button
              onClick={onHandleSubmit}
              className="mt-6 w-full py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition-colors text-white font-medium">
              Save
            </button>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )
      }
    </div>
  );
};

interface AddResumeProps {
  getResumes: () => void;
}

const AddResume: React.FC<AddResumeProps> = ({ getResumes }) => {
  const [createResume, setCreateResume] = useState<boolean>(false);

  return (
    <div>
      <div
        onClick={() => {
          setCreateResume(true);
        }}
        className="w-[160px] hover:border-2 hover:border-blue-500 h-[220px] hover:cursor-pointer flex flex-col items-center py-7 gap-8 text-center text-gray-200 rounded-xl bg-gradient-to-b from-[#2D2E2F] to-[#1F1F1F] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out border border-[#3E4E4F]"
      >
        <span className="font-semibold text-lg tracking-wide text-gray-300">
          Add Resume
        </span>
        <IoAdd className="w-16 h-16 p-3 text-[#1F1F1F] bg-[#4A90E2] rounded-full shadow-md hover:bg-[#357ABD] transition-colors duration-300 ease-in-out transform " />
      </div>
      {createResume && (
        <CreateResumeModal getResumes={getResumes} callback={setCreateResume} />
      )}
    </div>
  );
};

export default AddResume;
