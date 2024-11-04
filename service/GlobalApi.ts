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

// Export the function directly
export { createNewResume };
