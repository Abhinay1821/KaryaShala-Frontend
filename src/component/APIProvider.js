import React, { createContext, useContext } from 'react'

const APIContext = createContext({})
export const useAPI = () => {
    return useContext(APIContext)
}

const token = localStorage.getItem('authToken');

export default function APIProvider({ children }) {
    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState(null);
    const [photo, setPhoto] = React.useState("");

    const getUserInfo = async () => {
        // Get the token from localStorage
        const token = localStorage.getItem('authToken');

        // Prepare the request
        const response = await fetch('http://localhost:8080/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Add the token to the headers
                'ngrok-skip-browser-warning': true,

            },
        });

        // Handle the response
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();

    }

    const getProfilePic = async () => {
        // Get the token from localStorage
        const token = localStorage.getItem('authToken');
        if (!token) {
            return null;
        }
        // Prepare the request
        const response = await fetch('http://localhost:8080/user/profilePic', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Add the token to the headers
            },
        });

        // Handle the response
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    }

    const updateProfilePic = async (data) => {
        // Get the token from localStorage
        const token = localStorage.getItem('authToken');

        // Prepare the request
        const response = await fetch('http://localhost:8080/user/profilePic', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Add the token to the headers
            },
            body: JSON.stringify(data),
        });

        // Handle the response
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();

    }
    const updateResume = async (data) => {

        // Prepare the request
        const response = await fetch('http://localhost:8080/user/resume', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Add the token to the headers
            },
            body: JSON.stringify(data),
        });

        // Handle the response
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    }

    const skillsSuggestion = async (data) => {
        const response = await fetch('http://localhost:8080/api/skill/autocomplete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Add the token to the headers
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }

    React.useEffect(() => {
        getProfilePic().then((data) => {
            setPhoto(data?.data?.picture);
        });
    }, []);

    React.useEffect(() => {
        getUserInfo().then((data) => {
            setUser(data.data);
            setIsLoading(false);
        });
    }, []);

    return (
        <APIContext.Provider value={{ isLoading, user, getUserInfo, setIsLoading, setPhoto, setUser, updateProfilePic, updateResume,skillsSuggestion, photo }}>
            {children}
        </APIContext.Provider>
    )
}

