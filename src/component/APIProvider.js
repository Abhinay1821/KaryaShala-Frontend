import React,{ createContext,useContext } from 'react'

const APIContext = createContext({})
export const useAPI = () => {
    return useContext(APIContext)
}

export default function APIProvider({children}) {
    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState(null);

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
  
  return (
    <APIContext.Provider value={{isLoading,user,getUserInfo,setIsLoading,setUser}}>
        {children}
    </APIContext.Provider>
  )
}

