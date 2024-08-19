import React from "react";

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [isOtpSent, setIsOtpSent] = React.useState(false);
    const [otp, setOtp] = React.useState(Array(6).fill(''));

    const onSubmit = async () => {
        await fetch(`https://initially-true-jackal.ngrok-free.app/email/send?email=${email}`, {
            headers: {
                'ngrok-skip-browser-warning': true,
            },
        });
        setIsOtpSent(true);
    };

    const onSubmitOtp = async () => {
        const finalOtp = otp.join('');
        console.log('finalOtp', finalOtp);
        await fetch(`https://initially-true-jackal.ngrok-free.app/email/verify?otp=${finalOtp}&email=${email}`, {
            headers: {
                'ngrok-skip-browser-warning': true,
            },
        });
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
            <div className="w-1/2 flex justify-center items-center">
                <img className="h-full object-cover" src="/mainLogo.png" alt="logo" />
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