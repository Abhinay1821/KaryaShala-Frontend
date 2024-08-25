
export const postPersonalInfo = async (data) => {
    // Get the token from localStorage
    const token = localStorage.getItem('authToken');

    // Prepare the request
    const response = await fetch('http://localhost:8080/user/personal', {
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
};



export const postEducationInfo = async (data) => {
    // Get the token from localStorage
    const token = localStorage.getItem('authToken');

    // Prepare the request
    const response = await fetch('http://localhost:8080/user/education', {
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


export const postExperienceInfo = async (data) => {
    // Get the token from localStorage
    const token = localStorage.getItem('authToken');

    // Prepare the request
    const response = await fetch('http://localhost:8080/user/experience', {
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

export const postSkillsInfo = async (data) => {
    // Get the token from localStorage
    const token = localStorage.getItem('authToken');

    // Prepare the request
    const response = await fetch('http://localhost:8080/user/skills', {
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

export const postInterestInfo = async (data) => {
    // Get the token from localStorage
    const token = localStorage.getItem('authToken');    

    // Prepare the request
    const response = await fetch('http://localhost:8080/user/interests', {
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

export const markOnboardingComplete = async () => {
    // Get the token from localStorage
    const token = localStorage.getItem('authToken');

    // Prepare the request
    const response = await fetch('http://localhost:8080/user/onboard', {
        method: 'POST',
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


export const sendOtp = async (email) => {
    
    const response = await fetch(`http://localhost:8080/api/google/send-email-otp?email=${email}`, {
        headers: {
            'ngrok-skip-browser-warning': true,
        },
    });

    if (!response.ok) {
        const res= await response.json();
        console.log(res);
        throw new Error(res.error);
    }

    return response.json();
}
export const getUserInfo = async () => {
    // Get the token from localStorage
    const token = localStorage.getItem('authToken');

    // Prepare the request
    const response = await fetch('http://localhost:8080/api/google/getprofile', {
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


export const updateProfilePic = async (data) => {
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

export const getProfilePic = async () => {
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


export const getAllUsers = async () => {
    // Get the token from localStorage
    const token = localStorage.getItem('authToken');

    // Prepare the request
    const response = await fetch('http://localhost:8080/api/google/admin/users', {
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

export const deleteUser = async (userId) => {
    // Get the token from localStorage
    const token = localStorage.getItem('authToken');

    // Prepare the request
    const response = await fetch(`http://localhost:8080/api/google/admin/user/${userId}`, {
        method: 'DELETE',
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


export const createUser = async (data) => {
    // Get the token from localStorage
    const token = localStorage.getItem('authToken');

    // Prepare the request
    const response = await fetch('http://localhost:8080/api/google/admin/user/register', {
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

export const createJob = async (data) => {
    // Get the token from localStorage
    const token = localStorage.getItem('authToken');

    // Prepare the request  
    const response = await fetch('http://localhost:8080/api/google/admin/postjob', {
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

export const getCandidates = async (page,limit) => {
    // Get the token from localStorage
    const token = localStorage.getItem('authToken');

    // Prepare the request
    const response = await fetch(`http://localhost:8080/api/google/admin/candidates?page=${page}&limit=${limit}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Add the token to the headers
        },
    })

    // Handle the response
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}