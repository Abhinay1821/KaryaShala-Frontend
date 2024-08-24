import React from "react";
import LoadingScreen from "./component/loadingscreen";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [isOtpSent, setIsOtpSent] = React.useState(false);
    const [otp, setOtp] = React.useState(Array(6).fill(''));
    const [isLoading, setIsLoading] = React.useState(false);
    const navigate = useNavigate();

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
    
            const data = await response.json();
            console.log('Response data:', data);
    
            const token = data.token;
    
            if (token) {
                localStorage.setItem('authToken', token);
                console.log('Token saved to localStorage');
                window.location.reload();
            } else {
                console.error('Token not found in response');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        setIsLoading(false);
    };

    const otpFillingFunc = (e, index) => {
        const newOtp = [...otp];
        if (e.type === 'paste') {
            // Handle paste
            const pastedData = e.clipboardData.getData('text').slice(0, 6);
            pastedData.split('').forEach((char, i) => {
                newOtp[i] = char;
            });
            setOtp(newOtp);
        } else {
            // Handle key press
            newOtp[index] = e.target.value;

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

            if (e.key === 'Enter') {
                e.preventDefault();
                onSubmitOtp();
            }
        }
    };

    const navigateToAbout = () => {
        navigate('/about');
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-base-100 text-white relative">
            {isLoading && <LoadingScreen />}
            <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-8">
                <img className="h-auto max-w-xs md:max-w-md object-cover" src={'/logo.png'} style={{filter:'brightness(0) invert(1)'}} alt="logo" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4 md:p-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">Welcome!</h1>
                <div className="w-full max-w-md">
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
                        <div className="flex flex-row justify-center">
                            {otp.map((val, ind) => (
                                <input
                                    key={ind}
                                    value={val}
                                    maxLength={1}
                                    id={`otp${ind}`}
                                    className="w-12 h-12 mx-2 bg-transparent border-b-2 border-white text-center text-white"
                                    onKeyUp={(e) => otpFillingFunc(e, ind)}
                                    onChange={(e) => otpFillingFunc(e, ind)}
                                    onPaste={(e) => otpFillingFunc(e, ind)}
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
