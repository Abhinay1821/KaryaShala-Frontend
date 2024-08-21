import React from "react";
import LoadingScreen from "./component/loadingscreen";
import { useNavigate } from 'react-router-dom';
import logo from './logo.png'
export default function Login() {
    const [email, setEmail] = React.useState('');
    const [isOtpSent, setIsOtpSent] = React.useState(false);
    const [otp, setOtp] = React.useState(Array(6).fill(''));
    const [isLoading, setIsLoading] = React.useState(false);
    const navigate = useNavigate(); // Initialize the navigate function

    const onSubmit = async () => {
        setIsLoading(true);
        await fetch(`http://localhost:8080/email/send?email=${email}`, {
            headers: {
                'ngrok-skip-browser-warning': true,
            },
        });
        setIsLoading(false);
        setIsOtpSent(true);
    };

    const onSubmitOtp = async () => {
        setIsLoading(true);
        const finalOtp = otp.join('');    
        try {
            const response = await fetch(`http://localhost:8080/email/verify?otp=${finalOtp}&email=${email}`, {
                headers: {
                    'ngrok-skip-browser-warning': true,
                },
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Extract the JSON response
            const data = await response.json();
            console.log('Response data:', data);
    
            // Assume the token is in `data.token`
            const token = data.token; // Adjust this if the token is in a different field
    
            if (token) {
                // Save the token to localStorage
                localStorage.setItem('authToken', token);
                console.log('Token saved to localStorage');
                // Redirect to the home page
                navigate('/'); // Adjust the path as needed
            } else {
                console.error('Token not found in response');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        setIsLoading(false);
    };
    

    const otpFillingFunc = (e, index) => {
        const newOtp = [...otp]; // Create a new copy of otp array
        newOtp[index] = e.target.value;
        setOtp(newOtp);

        if (e.key === 'Backspace' && index > 0 && !newOtp[index]) {
            const inputElement = document.getElementById(`otp${index - 1}`);
            if (inputElement) {
                inputElement.focus();
            }
            return;
        }

        for (let i = 0; i < newOtp.length; i++) {
            if (newOtp[i] === '') {
                const inputElement = document.getElementById(`otp${i}`);
                if (inputElement) {
                    inputElement.focus();
                }
                break;
            }
        }
    };

    return (
        <div className="flex flex-row h-screen bg-black text-white">
            {isLoading && <LoadingScreen />}
            <div className="w-1/2 flex justify-center items-center">
                <img className="h-full object-cover" src={logo} style={{filter:'brightness(0) invert(1)'}} alt="logo" />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center">
                <h1 className="text-5xl font-bold mb-6 text-white">Welcome!</h1>
                <div className="w-1/2">
                    {!isOtpSent ? (
                        <div className="flex flex-col">
                            <label className="text-lg mb-2 text-white">Email</label>
                            <input
                                className="border-b-2 border-white bg-transparent text-white w-full outline-none mb-6 pb-2"
                                type="email"
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    ) : (
                        <div className="flex flex-row">
                            {otp.map((val, ind) => (
                                <input
                                    key={ind}
                                    value={val}
                                    maxLength={1}
                                    id={`otp${ind}`}
                                    className="w-12 mr-4 bg-transparent border-b-2 border-white text-center text-white"
                                    onKeyUp={(e) => otpFillingFunc(e, ind)}
                                    onChange={(e) => otpFillingFunc(e, ind)}
                                />
                            ))}
                        </div>
                    )}
                    <button
                        className="bg-white text-black px-4 py-2 rounded mt-4 hover:bg-gray-300 transition"
                        onClick={isOtpSent ? onSubmitOtp : onSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}