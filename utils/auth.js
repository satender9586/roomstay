export const setToken=(token)=>{
    
    // localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTZmNjkxNmNmZjI3ZjEzZjE4M2EyNyIsImlhdCI6MTcwOTYzNjIxMCwiZXhwIjoxNzA5NzIyNjEwfQ.uma8xD4ZdUYObPYni7Oe1R9Lp13tc-YFDi1nu1eSOwE")
    localStorage.setItem("token",token)
}

export const getToken=()=>{
    return localStorage.getItem("token")
}