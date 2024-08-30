import React from 'react'
import {maxHeadlineCharacters,minHeadlineWords} from '.././Constants'
export default function ResumeHeadlineUpdate({setOpen}) {
    const [inputText,setInputText] = React.useState('')
    const [minTextVal,setMinTextVal] = React.useState(false)
    const [maxTextVal,setMaxTextVal] = React.useState(false)

    const textValidation = (string) =>{
        if(string.split(' ').length<minHeadlineWords){
            setMinTextVal(true)
        }
        else if(string.length>maxHeadlineCharacters){
            setMaxTextVal(true)
        }
        else setOpen(false)
    }
    React.useEffect(()=>{
        if(inputText.split(' ').length>=minHeadlineWords) setMinTextVal(false)
        if(inputText.length > maxHeadlineCharacters) setMaxTextVal(true)
        else if(maxTextVal && inputText.length < maxHeadlineCharacters) setMaxTextVal(false)
    },[inputText])
    return (
        <div class="fixed inset-0 z-1 bg-black bg-opacity-50 flex items-center justify-center">
            <div class="bg-gray-800 w-full max-w-lg rounded-lg shadow-lg p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg text-white font-semibold">Resume headline</h2>
                    <button class="text-gray-100 hover:text-gray-200" onClick={()=>setOpen(false)}>&times;</button>
                </div>
                <p class="text-sm text-gray-300 mb-4">
                    It is the first thing recruiters notice in your profile. Write a concise headline introducing yourself to employers. (Minimum 5 words)
                </p>
                <textarea
                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    placeholder="Enter your resume headline here..."
                    onChange={(e)=>setInputText(e.target.value)}
                >{inputText}</textarea>

                <p class="text-right text-sm text-gray-500 mt-2">{Math.max(maxHeadlineCharacters-inputText.length,0)} character(s) left</p>
                {
                    minTextVal && <p className='text-red-500'>Please Write atleast 5 words</p>
                }
                {
                    maxTextVal && <p className='text-red-500'>Your Characters limit exceeded</p>
                }
                <div class="flex justify-end mt-4 space-x-4">
                    <button class="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>setOpen(false)}>Cancel</button>
                    <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" 
                    onClick={()=>textValidation(inputText)}>Save</button>
                </div>
            </div>
        </div>
    )
}
