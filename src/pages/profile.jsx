import React from 'react';

export default function UserProfile() {
    return (
        <>
            <div className="container mx-auto p-6">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="relative">
                                <img 
                                    src="profile-pic.jpg" 
                                    alt="Profile Picture" 
                                    className="w-16 h-16 rounded-full border border-gray-600" 
                                />
                                <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full text-white text-sm">Rejected</span>
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
                        {/* Resume Section */}
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <div className="flex justify-between items-center">
                                <h2 className="font-semibold text-white">Resume</h2>
                                <button className="text-blue-400 hover:underline">Update resume</button>
                            </div>
                            <div className="mt-4 p-4 border border-dashed border-gray-600 rounded-lg">
                                <p className="text-gray-300">Abhinay_Agrawal_Resume.pdf</p>
                                <p className="text-sm text-gray-500">Uploaded on Aug 09, 2024</p>
                            </div>
                        </div>

                        {/* Resume Headline */}
                        <div className="bg-gray-800 p-6 mt-6 rounded-lg shadow-lg">
                            <h2 className="font-semibold text-white">Resume headline</h2>
                            <p className="mt-4 text-gray-300">I am Abhinay Agrawal, Innovative Software Engineer, Seeking New Challenges and Growth Opportunities</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
