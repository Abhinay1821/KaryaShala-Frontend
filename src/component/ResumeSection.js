import React from 'react';
import { useAPI } from './APIProvider';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const ResumeSection = () => {
    const { user,updateResume } = useAPI()
    const resumeName = `${user.personalInfo.name.split(' ').join('_')}.pdf`
    const [uploadDate, setUploadDate] = React.useState(user.updatedAt.split('T')[0]);
    const [resumeData, setResumeData] = React.useState(user.personalInfo.resume);

    const handleResumeChange = (event) => {
        const file = event.target.files[0]; // Get the uploaded file
        if (file) {
            const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            setUploadDate(currentDate); // Update the state with the current date

            // Optional: Convert the file to base64 if needed
            const reader = new FileReader();
            reader.onloadend = () => {
                    toast.promise(updateResume({resume:reader.result}),{
                        pending : 'Uploading your Resume',
                        success: 'Resume Uploaded Sucessfully',
                        error: 'Error uploading Resume'
                    })
                    setResumeData(reader.result); // Remove the data URL part if present
                
            };
            reader.readAsDataURL(file);
        }
    };
    const handleUpdateResume = () => {
        document.getElementById('fileInputResume').click();
    };

    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
                <h2 className="font-semibold text-white">Resume</h2>
                <button className="text-blue-400 hover:underline" onClick={handleUpdateResume}>
                    Update resume
                </button>
            </div>
            <ToastContainer/>
            <div className="mt-4 p-4 border border-dashed border-gray-600 rounded-lg flex justify-between items-center">
                <p className="text-gray-300">{resumeName}</p>
                <div className="flex items-center">
                    <p className="text-sm text-gray-500 mr-4">Uploaded on {uploadDate}</p>
                    <button className="text-blue-400 hover:underline">
                        <a
                            href={resumeData}
                            download={resumeName}
                        >
                            Download Resume
                        </a>
                    </button>
                </div>
            </div>
            <input
                type="file"
                id="fileInputResume"
                className="hidden"
                accept=".pdf, .doc, .docx"
                onChange={(e) => handleResumeChange(e)}
            />
        </div>
    );
};

export default ResumeSection;