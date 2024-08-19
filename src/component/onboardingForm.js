import React, { useState } from 'react';
import LoadingScreen from './loadingscreen';
import { useNavigate } from 'react-router-dom';
import { postEducationInfo, postExperienceInfo, postInterestInfo, postPersonalInfo, postSkillsInfo, markOnboardingComplete } from '../service/api';
const OnboardingForm = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  
  // State for different sections
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    gender: '',
    birthdate: '',
    locale: '',
    mobile: '',
    picture: '',
    resume: ''
  });
  const [educationInfo, setEducationInfo] = useState([{ school: '', department: '', degree: '', startDate: '', endDate: '' }]);
  const [experienceInfo, setExperienceInfo] = useState([{ company: '', position: '', startDate: '', endDate: '', description: '' }]);
  const [skillsInfo, setSkillsInfo] = useState([{ skill: '', level: '' }]);
  const [interestInfo, setInterestInfo] = useState([{ interest: '' }]);

  // Handle change for input fields
  const handleChange = async (e, section, index) => {
    const { name, value, type, files } = e.target;
  
    switch (section) {
      case 1:
        if (type === 'file') {
          // Handle file input asynchronously
          try {
            const base64String = await toBase64(files[0]);
            setPersonalInfo(prev => ({ ...prev, [name]: base64String }));
          } catch (error) {
            console.error('Error converting file to Base64:', error);
          }
        } else {
          setPersonalInfo(prev => ({ ...prev, [name]: value }));
        }
        break;
        
      case 2:
        // Update education info
        const newEducationInfo = [...educationInfo];
        newEducationInfo[index] = { ...newEducationInfo[index], [name]: value };
        setEducationInfo(newEducationInfo);
        break;
        
      case 3:
        // Update experience info
        const newExperienceInfo = [...experienceInfo];
        newExperienceInfo[index] = { ...newExperienceInfo[index], [name]: value };
        setExperienceInfo(newExperienceInfo);
        break;
        
      case 4:
        // Update skills info
        const newSkillsInfo = [...skillsInfo];
        newSkillsInfo[index] = { ...newSkillsInfo[index], [name]: value };
        setSkillsInfo(newSkillsInfo);
        break;
        
      case 5:
        // Update interest info
        const newInterestInfo = [...interestInfo];
        newInterestInfo[index] = { ...newInterestInfo[index], [name]: value };
        setInterestInfo(newInterestInfo);
        break;
        
      default:
        break;
    }
  };
  

  // Add a new entry to a section
  const addEntry = (section) => {
    switch (section) {
      case 2:
        setEducationInfo([...educationInfo, { school: '', department: '', degree: '', startDate: '', endDate: '' }]);
        break;
      case 3:
        setExperienceInfo([...experienceInfo, { company: '', position: '', startDate: '', endDate: '', description: '' }]);
        break;
      case 4:
        setSkillsInfo([...skillsInfo, { skill: '', level: '' }]);
        break;
      case 5:
        setInterestInfo([...interestInfo, { interest: '' }]);
        break;
      default:
        break;
    }
  };

  // Remove an entry from a section
  const removeEntry = (section, index) => {
    switch (section) {
      case 2:
        setEducationInfo(educationInfo.filter((_, i) => i !== index));
        break;
      case 3:
        setExperienceInfo(experienceInfo.filter((_, i) => i !== index));
        break;
      case 4:
        setSkillsInfo(skillsInfo.filter((_, i) => i !== index));
        break;
      case 5:
        setInterestInfo(interestInfo.filter((_, i) => i !== index));
        break;
      default:
        break;
    }
  };

  // Handle save and move to next section
  const handleSave = () => {
    let isValid = true;
    setIsLoading(true);
    switch (currentSection) {
      case 1:
        // Validate Personal Info
        isValid = personalInfo.name && personalInfo.gender && personalInfo.birthdate && personalInfo.locale && personalInfo.mobile && personalInfo.resume;
        break;
      case 2:
        // Validate Education Info
        isValid = educationInfo.every(item =>
          item.school && item.department && item.degree && item.startDate && item.endDate
        );
        break;
      case 3:
        // Validate Experience Info
        isValid = experienceInfo.every(item =>
          item.company && item.position && item.startDate && item.endDate
        );
        break;
      case 4:
        // Validate Skills Info
        isValid = skillsInfo.every(item =>
          item.skill && item.level
        );
        break;
      case 5:
        // Validate Interest Info
        isValid = interestInfo.every(item =>
          item.interest
        );
        break;
      default:
        break;
    }
    setIsLoading(false);
    if (isValid) {
      if (currentSection < 5) {
        setCurrentSection(prev => prev + 1);
      }
    } else {
      alert('Please fill all required fields in this section.');
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // call the API here
    await postPersonalInfo(personalInfo);
    await postEducationInfo(educationInfo);
    await postExperienceInfo(experienceInfo);
    await postSkillsInfo(skillsInfo);
    await postInterestInfo(interestInfo);
    await markOnboardingComplete();
    navigate('/'); // Adjust the path as needed
    console.log('Form submitted');
    setIsLoading(false);
    // Here you would typically make an API call to submit the form data
  };

  // Section headings
  const sectionHeadings = [
    'Personal Information',
    'Education Information',
    'Experience Information',
    'Skills Information',
    'Interest Information'
  ];

  // Progress bar calculation
  const progress = ((currentSection-1) / 5) * 100;

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-5">
    {isLoading && <LoadingScreen />}

      <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-white mb-6 text-center">{sectionHeadings[currentSection - 1]}</h2>

        {/* Progress Bar */}
        <div className="relative mb-6">
          <div className="bg-gray-700 h-2 rounded-full">
            <div className="bg-gray-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="absolute top-0 right-0 text-gray-300 text-xs font-medium">{progress.toFixed(0)}%</div>
        </div>

        {/* Section 1: Personal Info */}
        {currentSection === 1 && (
          <div>
            <label className="block text-gray-300 mb-2 flex items-center">
              Name
              <span className="text-red-500 text-xs ml-2">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={personalInfo.name}
              onChange={(e) => handleChange(e, 1)}
              className="w-full p-3 bg-gray-700 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <label className="block text-gray-300 mb-2 flex items-center">
              Gender
              <span className="text-red-500 text-xs ml-2">*</span>
            </label>
            <input
              type="text"
              name="gender"
              value={personalInfo.gender}
              onChange={(e) => handleChange(e, 1)}
              className="w-full p-3 bg-gray-700 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <label className="block text-gray-300 mb-2 flex items-center">
              Birthdate
              <span className="text-red-500 text-xs ml-2">*</span>
            </label>
            <input
              type="date"
              name="birthdate"
              value={personalInfo.birthdate}
              onChange={(e) => handleChange(e, 1)}
              className="w-full p-3 bg-gray-700 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <label className="block text-gray-300 mb-2 flex items-center">
              City
              <span className="text-red-500 text-xs ml-2">*</span>
            </label>
            <input
              type="text"
              name="locale"
              value={personalInfo.locale}
              onChange={(e) => handleChange(e, 1)}
              className="w-full p-3 bg-gray-700 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <label className="block text-gray-300 mb-2 flex items-center">
              Mobile
              <span className="text-red-500 text-xs ml-2">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              value={personalInfo.mobile}
              onChange={(e) => handleChange(e, 1)}
              className="w-full p-3 bg-gray-700 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <label className="block text-gray-300 mb-2 flex items-center">
              Picture
            </label>
            <input
              type="file"
              name="picture"
              accept="image/jpeg, image/png"
              onChange={(e) => handleChange(e, 1)}
              className="w-full p-3 bg-gray-700 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <label className="block text-gray-300 mb-2">
              Resume 
              <span className="text-red-500 text-xs ml-2">*</span>

            </label>
            <input
              type="file"
              name="resume"
              accept=".pdf, .doc, .docx"
              onChange={(e) => handleChange(e, 1)}
              className="w-full p-3 bg-gray-700 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        )}

        {/* Section 2: Education Info */}
        {currentSection === 2 && (
          <div>
            {educationInfo.map((item, index) => (
              <div key={index} className="mb-4 p-4 bg-gray-700 rounded-lg">
                <label className="block text-gray-300 mb-2 flex items-center">
                  School
                  <span className="text-red-500 text-xs ml-2">*</span>
                </label>
                <input
                  type="text"
                  name="school"
                  value={item.school}
                  onChange={(e) => handleChange(e, 2, index)}
                  className="w-full p-3 bg-gray-600 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <label className="block text-gray-300 mb-2 flex items-center">
                  Department
                  <span className="text-red-500 text-xs ml-2">*</span>
                </label>
                <input
                  type="text"
                  name="department"
                  value={item.department}
                  onChange={(e) => handleChange(e, 2, index)}
                  className="w-full p-3 bg-gray-600 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <label className="block text-gray-300 mb-2 flex items-center">
                  Degree
                  <span className="text-red-500 text-xs ml-2">*</span>
                </label>
                <input
                  type="text"
                  name="degree"
                  value={item.degree}
                  onChange={(e) => handleChange(e, 2, index)}
                  className="w-full p-3 bg-gray-600 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <label className="block text-gray-300 mb-2 flex items-center">
                  Start Date
                  <span className="text-red-500 text-xs ml-2">*</span>
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={item.startDate}
                  onChange={(e) => handleChange(e, 2, index)}
                  className="w-full p-3 bg-gray-600 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <label className="block text-gray-300 mb-2 flex items-center">
                  End Date
                  <span className="text-red-500 text-xs ml-2">*</span>
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={item.endDate}
                  onChange={(e) => handleChange(e, 2, index)}
                  className="w-full p-3 bg-gray-600 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <button
                  type="button"
                  onClick={() => removeEntry(2, index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove Entry
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addEntry(2)}
              className="text-gray-300 hover:text-gray-500"
            >
              Add Education
            </button>
          </div>
        )}

        {/* Section 3: Experience Info */}
        {currentSection === 3 && (
          <div>
            {experienceInfo.map((item, index) => (
              <div key={index} className="mb-4 p-4 bg-gray-700 rounded-lg">
                <label className="block text-gray-300 mb-2 flex items-center">
                  Company
                  <span className="text-red-500 text-xs ml-2">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={item.company}
                  onChange={(e) => handleChange(e, 3, index)}
                  className="w-full p-3 bg-gray-600 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <label className="block text-gray-300 mb-2 flex items-center">
                  Position
                  <span className="text-red-500 text-xs ml-2">*</span>
                </label>
                <input
                  type="text"
                  name="position"
                  value={item.position}
                  onChange={(e) => handleChange(e, 3, index)}
                  className="w-full p-3 bg-gray-600 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <label className="block text-gray-300 mb-2 flex items-center">
                  Start Date
                  <span className="text-red-500 text-xs ml-2">*</span>
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={item.startDate}
                  onChange={(e) => handleChange(e, 3, index)}
                  className="w-full p-3 bg-gray-600 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <label className="block text-gray-300 mb-2 flex items-center">
                  End Date
                  <span className="text-red-500 text-xs ml-2">*</span>
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={item.endDate}
                  onChange={(e) => handleChange(e, 3, index)}
                  className="w-full p-3 bg-gray-600 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <label className="block text-gray-300 mb-2 flex items-center">
                  Description
                </label>
                <textarea
                  name="description"
                  value={item.description}
                  onChange={(e) => handleChange(e, 3, index)}
                  className="w-full p-3 bg-gray-600 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <button
                  type="button"
                  onClick={() => removeEntry(3, index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove Entry
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addEntry(3)}
              className="text-gray-300 hover:text-gray-500"
            >
              Add Experience
            </button>
          </div>
        )}

        {/* Section 4: Skills Info */}
        {currentSection === 4 && (
          <div>
            {skillsInfo.map((item, index) => (
              <div key={index} className="mb-4 p-4 bg-gray-700 rounded-lg">
                <label className="block text-gray-300 mb-2 flex items-center">
                  Skill
                  <span className="text-red-500 text-xs ml-2">*</span>
                </label>
                <input
                  type="text"
                  name="skill"
                  value={item.skill}
                  onChange={(e) => handleChange(e, 4, index)}
                  className="w-full p-3 bg-gray-600 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <label className="block text-gray-300 mb-2 flex items-center">
                  Level
                  <span className="text-red-500 text-xs ml-2">*</span>
                </label>
                <input
                  type="text"
                  name="level"
                  value={item.level}
                  onChange={(e) => handleChange(e, 4, index)}
                  className="w-full p-3 bg-gray-600 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <button
                  type="button"
                  onClick={() => removeEntry(4, index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove Entry
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addEntry(4)}
              className="text-gray-300 hover:text-gray-500"
            >
              Add Skill
            </button>
          </div>
        )}

        {/* Section 5: Interest Info */}
        {currentSection === 5 && (
          <div>
            {interestInfo.map((item, index) => (
              <div key={index} className="mb-4 p-4 bg-gray-700 rounded-lg">
                <label className="block text-gray-300 mb-2 flex items-center">
                  Interest
                  <span className="text-red-500 text-xs ml-2">*</span>
                </label>
                <input
                  type="text"
                  name="interest"
                  value={item.interest}
                  onChange={(e) => handleChange(e, 5, index)}
                  className="w-full p-3 bg-gray-600 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <button
                  type="button"
                  onClick={() => removeEntry(5, index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove Entry
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addEntry(5)}
              className="text-gray-300 hover:text-gray-500"
            >
              Add Interest
            </button>
          </div>
        )}

        <div className="flex justify-between">
          {currentSection > 1 && (
            <button
              type="button"
              onClick={() => setCurrentSection(prev => prev - 1)}
              className="bg-gray-700 text-white p-3 rounded-lg"
            >
              Previous
            </button>
          )}
          {currentSection < 5 ? (
            <button
              type="button"
              onClick={handleSave}
              className="bg-gray-700 text-white p-3 rounded-lg"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-gray-700 text-white p-3 rounded-lg"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default OnboardingForm;
