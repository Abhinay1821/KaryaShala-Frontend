import React from 'react';
import ProfilePicture from '../component/ProfilePicture';
import ResumeSection from '../component/ResumeSection';
import ResumeHeadlineUpdate from '../component/UpdateUserInfo/ResumeHeadlineUpdate';
import KeySkillsUpdate from '../component/UpdateUserInfo/KeySkillsUpdate'
import { useActionData } from 'react-router-dom';
import { useAPI } from '../component/APIProvider';

// const keySkills = ['CPP', 'REACT', 'JAVASCRIPT', 'HTML', 'CSS', 'DJANGO', 'PYTHON', 'DOCKER', 'KUBERNATIS']
const employments = [
    {
        title: 'Software Engineer',
        company: 'Nference Labs',
        type: 'Full-time',
        duration: 'Oct 2023 to Present (11 months)',
        noticePeriod: '15 Days or less Notice Period',
        description: 'Taken the full ownership of the application - Cohort-Visualizer application, Built Several key features and made the application bug free by resolving many bugs on it. Learnt Advanced concepts of React, Vast usage of javascript and also learnt the best usage of git here',
        skills: ['React.js', 'Javascript', 'HTML', 'CSS', 'GIT'],
        projects: ['Cohort Visualizer']
    },
    {
        title: 'Other',
        company: 'Nference Labs',
        type: 'Internship',
        duration: 'Jul 2023 to Oct 2023 (4 months)',
        projects: ['Cohort Visualizer']
    },
    {
        title: 'Other',
        company: 'Antino Labs',
        type: 'Internship',
        duration: 'Jan 2022 to Jul 2022 (7 months)',
        projects: ['Livo App and CMS streetLight']
    }
];

const education = [
    {
        title: 'BTech Electrical Engineering',
        college: 'IIT MANDI',
        type: 'Full-time',
        duration: '2019-2023',
    },
];

export default function UserProfile() {
    const {user} = useAPI()
    const [headlineFormOpen, setHeadlineFormOpen] = React.useState(false)
    const [keySkillsFormOpen, setKeySkillsFormOpen] = React.useState(false)
    const [keySkills,setKeySkills] = React.useState(user?.skillsInfo[0]?.skill.split(','))
    return (
        <>
            <div className={`container mx-auto p-6 `}>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-600">
                                <ProfilePicture isUpdate={true} width={24} height={24} />
                            </div>
                            <div className="ml-4">
                                <h2 className="text-xl font-semibold text-white">Abhinay Agrawal</h2>
                                <p className="text-sm text-gray-400">Software Engineer at Nference Labs</p>
                                <p className="text-sm text-gray-400"><i className="fas fa-map-marker-alt"></i> Bengaluru, INDIA</p>
                                <p className="text-sm text-gray-400"><i className="fas fa-calendar-alt"></i> 1 Year 2 Months</p>
                                <p className="text-sm text-gray-400"><i className="fas fa-rupee-sign"></i> ₹ 14,00,000</p>
                            </div>
                        </div>
                        <button className="bg-orange-600 text-white py-2 px-4 rounded-lg">Add 1 missing detail</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    {/* Left Sidebar */}
                    <div className="col-span-1">
                        {/* Quick Links */}
                        <div className="bg-gray-800 p-4 rounded-lg shadow">
                            <h2 className="font-semibold text-white mb-4">Quick links</h2>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-blue-400 hover:underline">Resume</a></li>
                                <li><a href="#" className="text-blue-400 hover:underline">Resume headline</a></li>
                                <li><a href="#" className="text-blue-400 hover:underline">Key skills</a></li>
                                <li><a href="#" className="text-blue-400 hover:underline">Employment</a></li>
                                <li><a href="#" className="text-blue-400 hover:underline">Education</a></li>
                                <li><a href="#" className="text-blue-400 hover:underline">IT skills</a></li>
                                <li><a href="#" className="text-blue-400 hover:underline">Projects</a></li>
                                <li><a href="#" className="text-blue-400 hover:underline">Profile summary</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Profile Section */}
                    <div className="col-span-2">
                        <ResumeSection />

                        {/* Resume Headline */}
                        <div className="bg-gray-800 p-6 mt-6 rounded-lg shadow-lg">
                            <div className='flex flex-row'>
                                <h2 className="font-semibold text-white mr-2">Resume headline</h2>
                                <button className="text-blue-500 cursor-pointer" onClick={() => setHeadlineFormOpen(true)}>✏️</button>
                            </div>
                            <p className="mt-4 text-gray-300">I am Abhinay Agrawal, Innovative Software Engineer, Seeking New Challenges and Growth Opportunities</p>
                        </div>

                        {/* {Skills} */}
                        <div className="bg-gray-800 p-6 mt-6 rounded-lg shadow-lg">
                            <div className='flex flex-row'>
                                <h2 className="font-semibold text-white mr-2">Key Skills</h2>
                                <button className="text-blue-500 cursor-pointer" onClick={() => setKeySkillsFormOpen(true)}>✏️</button>
                            </div>
                            <div className='flex flex-wrap rounded-lg shadow-md'>
                                {keySkills?.map((value, index) => (
                                    <div
                                        key={index}
                                        className='mt-4 mr-3 px-4 py-2 bg-gray text-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-900 cursor-pointer'
                                    >
                                        {value}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* {Employment} */}
                        <div className="bg-gray-800 p-6 mt-6 rounded-lg shadow-lg">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl text-white font-semibold">Employment</h2>
                                <a href="#" className="text-blue-600">Add employment</a>
                            </div>

                            {employments.map((job, index) => (
                                <div key={index} className="mb-8">
                                    <div className="flex items-center mb-2">
                                        <h3 className="text-white font-semibold mr-2">{job.title}</h3>
                                        <span className="text-blue-500 cursor-pointer">✏️</span>
                                    </div>
                                    <p className="text-white mb-1">{job.company}</p>
                                    <p className="text-gray-300 mb-1 font-light">{job.type} | {job.duration}</p>

                                    {job.noticePeriod && <p className="text-gray-300 mb-1">{job.noticePeriod}</p>}
                                    {job.description && <p className="text-gray-200 mb-2">{job.description}</p>}

                                    {job.skills && (
                                        <p className="text-white mb-1">
                                            <span className="font-semibold">Top 5 key skills:</span>
                                            {job.skills.map((skill, i) => (
                                                <span key={i} className="text-gray-300 font-light mx-1">{i < job?.skills.length - 1 ? `${skill},` : skill}</span>
                                            ))}
                                        </p>
                                    )}

                                    {job.projects && (
                                        <div>
                                            <p className="text-gray-300 mt-2 mb-1 font-light">Projects</p>
                                            {job.projects.map((project, i) => (
                                                <p
                                                    key={i}
                                                    className="inline-block mt-1 mr-3 px-4 py-2 bg-gray-800 text-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-900 cursor-pointer"
                                                >
                                                    {project}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* {Education} */}

                        <div className="bg-gray-800 p-6 mt-6 rounded-lg shadow-lg">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl text-white font-semibold">Education</h2>
                                <a href="#" className="text-blue-600">Add Education</a>
                            </div>

                            {education.map((edu, index) => (
                                <div key={index} className="mb-8">
                                    <div className="flex items-center mb-2">
                                        <h3 className="text-white font-semibold mr-2">{edu.title}</h3>
                                        <span className="text-blue-500 cursor-pointer">✏️</span>
                                    </div>
                                    <p className="text-white mb-1">{edu.college}</p>
                                    <p className="text-gray-300 mb-1 font-light">{edu.type} | {edu.duration}</p>
                                </div>
                            ))}
                        </div>

                        {/* {Profile Summary} */}
                        <div className="bg-gray-800 p-6 mt-6 rounded-lg shadow-lg">
                            <div className="flex mb-2">
                                <h2 className="font-semibold text-white mr-2">Profile Summary</h2>
                                <span className="text-blue-500 cursor-pointer">✏️</span>
                            </div>
                            <p className='text-white font-light'>Did 6 months intern at antino labs 3 months intern at nference working as a full time employee at nference I am a tech enthusiast and want to learn as many thing as possible and want to build something which can create an impact.</p>
                        </div>

                    </div>
                </div>
            </div>

            {
                headlineFormOpen && <ResumeHeadlineUpdate setOpen={setHeadlineFormOpen} />
            }
            {
                keySkillsFormOpen && <KeySkillsUpdate setOpen={setKeySkillsFormOpen} keySkills={keySkills} setKeySkills={setKeySkills}/>
            }
        </>
    );
}
