import React, { useState, useEffect } from 'react';
import { useAPI } from '../APIProvider';
import { defaultSuggestions } from '../Constants';

const KeySkillsUpdate = ({ setOpen, keySkills, setKeySkills }) => {
    const { skillsSuggestion } = useAPI();
    const [dynamicSuggestions, setDynamicSuggestions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    // const [error, setError] = useState(null);

    const handleAddSkill = () => {
        if (inputValue.trim() && !keySkills.includes(inputValue)) {
            setKeySkills([...keySkills, inputValue]);
            setInputValue('');
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        setKeySkills(keySkills.filter(skill => skill !== skillToRemove));
    };

    const handleAddSuggestedSkill = (skill) => {
        if (!keySkills.includes(skill)) {
            setKeySkills([...keySkills, skill]);
        }
    };

    useEffect(() => {
        if (inputValue) {
            const debounceTimeout = setTimeout(async () => {
                try {
                    const results = await skillsSuggestion({ input: inputValue });
                    setDynamicSuggestions(results.suggestions);
                } catch (err) {
                    console.error('Error fetching suggestions:', err);
                    // setError('Failed to fetch suggestions. Please try again.');
                } 
            }, 300);

            return () => clearTimeout(debounceTimeout);
        } else {
            setDynamicSuggestions([]); // Clear suggestions when input is cleared
        }
    }, [inputValue, skillsSuggestion]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 w-full max-w-2xl rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg text-white font-semibold">Key skills</h2>
                    <button className="text-gray-200 hover:text-gray-500" onClick={() => setOpen(false)}>&times;</button>
                </div>
                <p className="text-sm text-gray-200 mb-4">
                    Add skills that best define your expertise, for e.g., Direct Marketing, Oracle, Java, etc. (Minimum 1)
                </p>
                <div className="mb-4">
                    <h3 className="text-sm text-white font-medium mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {keySkills.map((skill, index) => (
                            <span key={index} className="bg-gray-900 text-gray-100 px-3 py-1 rounded-full flex items-center">
                                {skill}
                                <button onClick={() => handleRemoveSkill(skill)} className="ml-2 text-red-500 hover:text-red-700">&times;</button>
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mb-4 relative">
                    <input
                        type="text"
                        placeholder="Add skills"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAddSkill()}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {dynamicSuggestions.length > 0 && (
                        <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto z-10">
                            {dynamicSuggestions.map((suggestion, index) => (
                                <div
                                    key={index}
                                    onClick={() => {
                                        handleAddSuggestedSkill(suggestion);
                                        setInputValue('');
                                    }}
                                    className="cursor-pointer p-2 hover:bg-gray-200"
                                >
                                    {suggestion}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Default Suggested Skills Section */}
                <div className="mb-6">
                    <p className="text-sm text-gray-100 font-medium mb-2">Or you can select from the suggested set of skills</p>
                    <div className="flex flex-wrap gap-2">
                        {defaultSuggestions.map((skill, index) => (
                            <button
                                key={index}
                                onClick={() => handleAddSuggestedSkill(skill)}
                                className="bg-gray-900 text-gray-200 px-3 py-1 rounded-full hover:bg-gray-950"
                            >
                                {skill} +
                            </button>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end mt-4 space-x-4">
                    <button className="text-blue-500 hover:underline" onClick={() => setOpen(false)}>Cancel</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => setOpen(false)}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default KeySkillsUpdate;