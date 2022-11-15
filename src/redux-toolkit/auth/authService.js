import axios from 'axios'

const API_URL = '/api/users'
const API_URL_LOGIN = '/api/users/login'


// Register user
const register = async (userData) =>{
    const response = await axios.post(API_URL, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}


// Login user
const login = async (userData) =>{
    const response = await axios.post(API_URL_LOGIN , userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Log Out user
const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('profilePicUrl')
}


const authService = {

    register,
    logout,
    login,
}

export default authService