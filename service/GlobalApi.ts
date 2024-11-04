// api.ts or a similar file
import axios, { AxiosResponse } from 'axios';

// Define the interface for the resume data
interface ResumeData {
    title: string;
    resumeId: string | null;
    userEmail: string | null;
    userName: string | null;
}

// Access the environment variable
const apiKey = import.meta.env.VITE_STRAPI_API_KEY; // This should work now

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    }
});

// Update createNewResume function with types and wrap data
const createNewResume = (data: ResumeData): Promise<AxiosResponse<any>> => {
    const payload = { data }; // Wrap the data in a `data` object
    return axiosClient.post('/user-resumes', payload);
};

const getAllResumeIds = async (): Promise<{ resumeId: string; title: string }[]> => {
    try {
        const response: AxiosResponse<{ data: { resumeId: string; title: string }[] }> = await axiosClient.get('/user-resumes');

        // Map through the response data to extract resumeId and title from each resume
        const resumes = response.data.data.map((resume) => ({
            resumeId: resume.resumeId,
            title: resume.title
        }));

        return resumes;
    } catch (error) {
        console.error("Error fetching resume IDs:", error);
        return []; // Return an empty array if there's an error
    }
};


// Export the function directly
export { createNewResume ,getAllResumeIds};
