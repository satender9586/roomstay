export const removeCredentials = () => {
    if (typeof window !== "undefined" && window.localStorage) {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
    }
}


export const setToken = (token) => {
    if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("token", token)
    }
}

export const getToken = () => {
    if (typeof window !== "undefined" && window.localStorage) {
        return localStorage.getItem("token")
    }
}

