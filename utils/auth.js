export const removeCredentials=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("user")
}


export const setToken = (token) => {
    localStorage.setItem("token", token)
}

export const getToken = () => {
    return localStorage.getItem("token")
}

