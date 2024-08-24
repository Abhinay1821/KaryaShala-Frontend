import React from 'react'

export default function UserProfile() {
    return (
        <>
            <div class="container mx-auto p-6">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <div class="relative">
                                <img src="profile-pic.jpg" alt="ProfilePicture" class="w-16 h-16 rounded-full" />
                                <span class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full text-white text-sm">Rejected</span>
                            </div>
                            <div class="ml-4">
                                <h2 class="text-xl font-semibold text-gray-900">Abhinay Agrawal</h2>
                                <p class="text-sm text-gray-500">Software Engineer at Nference Labs</p>
                                <p class="text-sm text-gray-500"><i class="fas fa-map-marker-alt"></i> Bengaluru, INDIA</p>
                                <p class="text-sm text-gray-500"><i class="fas fa-calendar-alt"></i> 1 Year 2 Months</p>
                                <p class="text-sm text-gray-500"><i class="fas fa-rupee-sign"></i> ₹ 14,00,000</p>
                            </div>
                        </div>
                        <button class="bg-orange-200 text-orange-600 py-2 px-4 rounded-lg">Add 1 missing details</button>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* <!-- Left Sidebar --> */}
                    <div class="col-span-1">
                        {/* <!-- Quick Links --> */}
                        <div class="bg-white p-4 rounded-lg shadow">
                            <h2 class="font-semibold text-gray-700 mb-4">Quick links</h2>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-blue-600 hover:underline">Resume</a></li>
                                <li><a href="#" class="text-blue-600 hover:underline">Resume headline</a></li>
                                <li><a href="#" class="text-blue-600 hover:underline">Key skills</a></li>
                                <li><a href="#" class="text-blue-600 hover:underline">Employment</a></li>
                                <li><a href="#" class="text-blue-600 hover:underline">Education</a></li>
                                <li><a href="#" class="text-blue-600 hover:underline">IT skills</a></li>
                                <li><a href="#" class="text-blue-600 hover:underline">Projects</a></li>
                                <li><a href="#" class="text-blue-600 hover:underline">Profile summary</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Main Profile Section --> */}
                    <div class="col-span-2">
                        {/* <!-- Profile Card --> */}
                        {/* <!-- Resume Section --> */}
                        <div class="bg-white p-6 mt-6 rounded-lg shadow-lg">
                            <div class="flex justify-between items-center">
                                <h2 class="font-semibold text-gray-700">Resume</h2>
                                <button class="text-blue-600 hover:underline">Update resume</button>
                            </div>
                            <div class="mt-4 p-4 border border-dashed border-gray-300 rounded-lg">
                                <p class="text-gray-600">Abhinay_Agrawal_Resume.pdf</p>
                                <p class="text-sm text-gray-500">Uploaded on Aug 09, 2024</p>
                            </div>
                        </div>

                        {/* <!-- Resume Headline --> */}
                        <div class="bg-white p-6 mt-6 rounded-lg shadow-lg">
                            <h2 class="font-semibold text-gray-700">Resume headline</h2>
                            <p class="mt-4 text-gray-600">I am Abhinay Agrawal, Innovative Software Engineer, Seeking New Challenges and Growth Opportunities</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
